import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import BasicGrid from './BasicGrid';
import { DataGrid } from '@mui/x-data-grid';


function App() {
  return (

    <BasicGrid></BasicGrid>
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  )
   

}

export default App;


