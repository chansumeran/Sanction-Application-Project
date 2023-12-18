
export const convertTableToCSV = (tableData) => {
    const rows = [];
    
    // Extract header
    const header = Array.from(tableData.querySelectorAll('th')).map(cell => cell.innerText.trim());
    rows.push(header.join(','));
  
    // Extract rows
    const tableRows = Array.from(tableData.querySelectorAll('tbody tr'));
    tableRows.forEach(row => {
      const rowData = Array.from(row.querySelectorAll('td')).map(cell => cell.innerText.trim());
      rows.push(rowData.join(','));
    });
  
    return rows.join('\n');
  };