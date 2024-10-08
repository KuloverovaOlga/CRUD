import { createRoot } from 'react-dom/client';

import App from './components/app/app';

import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
