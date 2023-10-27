import React from 'react';

export default function BackendReferer() {
  return (
    <div>
      <tr>
        <td>JS Referer</td>
        <td>{document.referrer}</td>
      </tr>
    </div>
  );
}
