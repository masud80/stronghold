import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AssetInventory from './pages/AssetInventory';
import MLModelStatus from './pages/MLModelStatus';
import DataIngestion from './pages/DataIngestion';
import Settings from './pages/Settings';
import PortfolioDashboard from './pages/PortfolioDashboard';
import DealDashboard from './pages/DealDashboard';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/assets" replace />} />
          <Route path="/assets" element={<AssetInventory />} />
          <Route path="/ml-models" element={<MLModelStatus />} />
          <Route path="/data-ingestion" element={<DataIngestion />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/investment/portfolios" element={<PortfolioDashboard />} />
          <Route path="/structuring/deals" element={<DealDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App; 