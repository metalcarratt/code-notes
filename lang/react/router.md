# React Router

Install:

```Bash
npm install react-router-dom
```

In App:

```JavaScript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <router path="/abc" element={<MyPage1/>} />
      </Routes>
    </BrowserRouter>
  };
}
```

Navigation:

```JavaScript
import { useNavigate } from 'react-router-dom';

navigate('/abc');
```
