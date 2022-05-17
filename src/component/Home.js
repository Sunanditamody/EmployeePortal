import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


function Home() {
    const [data, setdata] = useState([])
    const [selectionModel, setSelectionModel] = useState([]);
    const [editopen, editSetOpen] = useState(false);
    const [pageSize, setPageSize] = useState(5);
    const columns =
        [{ field: 'id', headerName: 'Id', width: 240 },
        { field: 'name', headerName: 'Name', width: 240 },
        { field: 'email', headerName: 'Email', width: 240 },
        { field: 'work', headerName: 'Work', width: 240 },
        { field: 'mobile', headerName: 'Number', width: 240 },

        ]



    useEffect(() => {
        const fet = () => {
            axios.get('http://localhost:5000')
                .then((response) => {


                    const mydata = [...response.data]
                    setdata(mydata);
                    console.log(selectionModel);
                })
                .catch(error => console.log(error));
        }
        fet()

    }, []);

    let rows = [...data]



    const deletehandler = () => {
        for (let j = 0; j < selectionModel.length; j++) {
            axios.post('http://localhost:5000/delete', { i: selectionModel[j] })
                .then((response) => {

                    console.log(response);


                })
                .catch(error => console.log(error));

        }
    }
    const handleEditOpen = () => {
        editSetOpen(true);
       
        
      };
    
      const handleEditClose = () => {
        editSetOpen(false);
      };

    const edithandler = () => {
        const nm = document.getElementById("name").value;

        const s = selectionModel[0];
        axios.post('http://localhost:5000/edit', { i: s, n: nm })
            .then((response) => {
                console.log(response);
                editSetOpen(false);

            })
            .catch(error => console.log(error));


    }
    
    const [search, setsearch] = useState("")
   
      const searchhandler = () => {
  
        axios.post("http://localhost:5000/search", { n: search })
  
          .then((response) => {
           setdata(response.data)
          })
          .catch(error => console.log(error));
      }
     
    return (
        <>
        <div>
            &nbsp;&nbsp;

            <a href='/register'>
                
                <button className="btn btn-primary">Add data</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={deletehandler}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button  sx={{height:39,width:140,borderRadius:2}} variant="outlined" onClick={handleEditOpen}  >Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
                <TextField sx={{width:150,maxheight:3,marginRight:3}} id="outlined-basic" label="Search..." variant="outlined" onChange={(e) => setsearch(e.target.value)} />
                <Button  sx={{height:39,width:140,borderRadius:2}} variant="outlined" onClick={searchhandler}  >Search</Button>

             
             
            <Dialog open={editopen} onClose={handleEditClose}>
                <DialogTitle className='dialog2'>Edit Records</DialogTitle>
                <DialogContent className='dialog'>
                    <DialogContentText>
                        <TextField style={{ width: 255 }} id="name" label="Name" variant="filled" className='text ' /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                       
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='dialog'>
                    <Button sx={{ width: 290 }} onClick={handleEditClose}>Cancel</Button>
                    <Button sx={{ width: 290}} onClick={edithandler}>Edit</Button>
                </DialogActions>
            </Dialog>

            <div style={{ height: 400, width: '100%' }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ flexGrow: 1 }}>
                        <DataGrid sx={{ color: 'black' }}
                            rows={rows}
                            getRowId={(rows) => rows.id}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[5, 10, 20, 30]}
                            pagination
                            checkboxSelection
                            onSelectionModelChange={(row) => {
                                setSelectionModel(row);

                            }
                            }

                            selectionModel={selectionModel}
                            {...data}

                        />

                    </div>
                </div>
            </div>
        </div>
        <div>

      
        </div>
        </>
    )
}

export default Home