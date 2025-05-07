import React, { useState } from 'react';

const products = [
  { id: 1, name: "Cá khô hộp quà", price: "$25/box" },
  { id: 2, name: "Cá khô theo kg", price: "$35/kg" },
  { id: 3, name: "Khô chiên sẵn", price: "$40/kg" },
  { id: 4, name: "Cơm gà xối mỡ", price: "$7/portion" },
  { id: 5, name: "Cơm chiên Dương Châu", price: "$6/portion" },
];

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mekong Gourmet – Đặc sản miền Tây tại Singapore</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} – {p.price}</li>
        ))}
      </ul>
      <h2>Đặt hàng</h2>
      <p>Vui lòng điền form bên dưới để đặt món. Đơn hàng sẽ được gửi tới Gmail của chúng tôi.</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf_placeholder_link/viewform?embedded=true"
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="Form đặt hàng"
      >Đang tải…</iframe>
    </div>
  );
}
