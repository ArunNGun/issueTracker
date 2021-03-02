// //The below code works but not using this in project since use of tables is not allowed and all the issues
// //are already diplayed in Dashboard

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// //import MaterialTable from 'material-table';
// import { getIssues } from '../../actions/issueAction';
// import MUIDataTable from "mui-datatables";


// function Issues() {
//     let issues=useSelector(state=>state.issues)
       
//     const columns = ["id","severity","status","issueDescription","date","user"]
//     //     {
//     //      field: "id",
//     //      title: "Number"
//     //     },
//     //     {
//     //      field: "severity",
//     //      title: "Severity",
//     //     },
//     //     {
//     //      field: "status",
//     //      title: "Status",
//     //     },
//     //     {
//     //      field: "issueDescription",
//     //      title: "Description",
//     //     },
//     //     {
//     //      field: "date",
//     //      title: "Date",
//     //     },
//     //     {
//     //      field: "user",
//     //      title: "User",
//     //     },
//     //    ];

//        const dispatch = useDispatch()
//        useEffect(() => {
//            dispatch(getIssues())
//        }, [dispatch])

//        const options = {
//         filterType: 'none',
//       };

//     return (
//         <div>
//             {/* <MaterialTable
//                 style={{background: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))'}}
//                 columns={columns}
//                 data={issues}
//                 title='All Issues (click on header to sort Issues)'
//                 onRowClick={(evt, selectedRow) =>
//                 setSelectedRow(selectedRow.tableData.id)
//                 }
//                 options={{
//                 search: true,
//                 rowStyle: rowData => ({

//                     // backgroundColor:
//                     // selectedRow === rowData.tableData.id ? '#DCDCDC' : '#FFF'
//                     backgroundColor: 'linear-gradient(to bottom right,rgba(255,255,255,0.2),rgba(255,255,255,0))'
//                 })
//                 }}
//             /> */}
//             <MUIDataTable 
//                 title={"Issues List"} 
//                 data={issues} 
//                 columns={columns} 
//                 options={options} 
//                 />
//         </div>
//     )
// }

// export default Issues
