import React, { useState, useEffect } from 'react';
import '../App.css';
import AddUser from './AddUser';

const API_BASE_URL = 'http://localhost:3001/api';

const formatCurrency = (value) => `KSh ${Number(value || 0).toLocaleString()}`;

const mapUser = (user) => ({
  ...user,
  role: user.role || 'User',
  salary: formatCurrency(user.salary || 0),
  status: user.status || 'Active',
});

export default function Users() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        const normalized = Array.isArray(data) ? data.map(mapUser) : [];
        setUsers(normalized);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUsers([]);
        setLoading(false);
      });
  }, []);

  const filtered = users.filter(
    (u) =>
      (u.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (u.email || "").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  return (
    <div>

      {/* Modal Overlay */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              width: '50%',
              maxHeight: '90vh',
              overflow: 'auto',
              borderRadius: '8px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            }}
          >
            <AddUser
              onSuccess={(newUser) => {
                setUsers((prev) => [...prev, mapUser(newUser)]);
                setShowModal(false);
              }}
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 24,
        }}
      >
        {[
          { label: 'Total Users', value: users.length },
          {
            label: 'Active',
            value: users.filter((u) => u.status === 'Active').length,
          },
          {
            label: 'Admins',
            value: users.filter((u) => u.role === 'Admin').length,
          },
        ].map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="table-card">
        <div className="table-card-header">
          <div className="table-card-title">User List</div>

          <div className="table-toolbar">
            <div className="search-box">
              <input
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary btn-sm"
              onClick={() => setShowModal(true)}
            >
              + Add User
            </button>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((u) => (
              <tr key={u.id}>
                <td style={{ fontWeight: 600, fontSize: 13 }}>
                  {u.name}
                </td>

                <td style={{ fontSize: 13, color: '#6b7280' }}>
                  {u.email}
                </td>

                <td>{u.role}</td>

                <td>
                  <span
                    className={`badge badge-${
                      u.status === 'Active' ? 'success' : 'danger'
                    }`}
                  >
                    {u.status}
                  </span>
                </td>

                <td>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button className="btn btn-outline btn-sm btn-icon">
                      <b>VIEW</b>
                    </button>

                    <button className="btn btn-outline btn-sm btn-icon">
                      <b>EDIT</b>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <div className="pagination-info">
            Showing {filtered.length} of {users.length} users
          </div>
        </div>
      </div>
    </div>
  );
}