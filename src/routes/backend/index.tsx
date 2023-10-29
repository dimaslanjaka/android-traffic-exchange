import { projectConfig } from '@root/src/project';
import React from 'react';

export default function BackendIndex() {
  return (
    <div>
      <ul>
        <li>
          <a href="home.html">Home</a>
        </li>
        <li>
          <a href={projectConfig.paths.base + 'backend/referer.html'}>Anonymity</a>
        </li>
        <li>
          <a href={projectConfig.paths.base + 'backend/anon.html'}>Anonymity</a>
        </li>
        <li>
          <a href={projectConfig.paths.base + 'backend/info.html'}>Anonymity</a>
        </li>
        <li>
          <a href={projectConfig.paths.base + 'backend/anonymity.html'}>Anonymity</a>
        </li>
      </ul>
    </div>
  );
}
