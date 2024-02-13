import { Fragment } from "react";
import { Button } from "react-bootstrap";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
export const COLUMNS2: any = [
  {
    Header: "SI NO",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "PROJECT NAME",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "TOTAL NUMBER OF DEVICES ",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "ACTIVE COUNT",
    accessor: "Product",
    className: "text-center ",
  },
  {
    Header: "INACTIVE COUNT ",
    accessor: "ProductCost",
    className: "text-center ",
  },
  {
    Header: "STATUS ",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  // {
  //   Header: "Status",
  //   accessor: "Status",
  // },
  // {
  //   Header: "ACTION",
  //   accessor: "Action",
  //   className: "text-center ",
  // },
];

export const DATATABLE2 = [
  {
    PurchaseDate: "01",
    ClientName: "Nagaland",
    ProductID: "44",
    // Product: "Mi LED Smart TV 4A 80",
    // PaymentMode: "Online Payment",
    // Status: <span className="badge badge-success-transparent">Delivered</span>,
    // ProductCost: "$320,800",
    Action: (
      <div className="btn-list">
        <a  className="btn btn-sm btn-def tx-muted">
          <i className="fe fe-edit"></i>
        </a>
        <a  className="btn btn-sm btn-def tx-muted">
          <i className="fe fe-trash"></i>
        </a>
      </div>
    ),
  },
  {
    PurchaseDate: "02",
    ClientName: "EAII",
    ProductID: "44",
    // Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    // PaymentMode: "Cash on delivered",
    // Status: <span className="badge badge-primary-transparent">Add Cart</span>,
    // ProductCost: "$170,750",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "03",
    ClientName: "Gujarat",
    ProductID: "29",
    // Product: "Vu 80cm (32 inch) HD Ready LED TV",
    // PaymentMode: "Online Payment",
    // Status: <span className="badge badge-danger-transparent">Pending</span>,
    // ProductCost: "$86,000",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "04",
    ClientName: "Ajmera Villows",
    ProductID: "29",
    // Product: "Micromax 81cm (32 inch) HD Ready LED TV",
    // PaymentMode: "Cash on delivered",
    // Status: <span className="badge badge-warning-transparent">Delivering</span>,
    // ProductCost: "$433,060",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "05",
    ClientName: "Elcita",
    ProductID: "133",
    // Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    // PaymentMode: "Online Payment",
    // Status: <span className="badge badge-danger-transparent">Shipped</span>,
    // ProductCost: "$162,700",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "06",
    ClientName: "Volvo",
    ProductID: "43",
    // Product: "Digisol DG-HR3400 Router ",
    // PaymentMode: "Cash on delivered",
    // Status: <span className="badge badge-primary-transparent">Delivering</span>,
    // ProductCost: "$372,000",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "07",
    ClientName: "Ahad Opus",
    ProductID: "758",
    // Product: "Dell WM118 Wireless Optical Mouse",
    // PaymentMode: "Online Payment",
    // Status: <span className="badge badge-info-transparent">Add to Cart</span>,
    // ProductCost: "$137,500",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "08",
    ClientName: "Ahad Excellencia",
    ProductID: "1581",
    // Product: "Dell 16 inch Laptop Backpack ",
    // PaymentMode: "Cash on delivered",
    // Status: <span className="badge badge-pink-transparent">Delivered</span>,
    // ProductCost: "$327,900",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "09",
    ClientName: "Ahp Woods",
    ProductID: "81",
    // Product: "Mi LED Smart TV 4A 80",
    // PaymentMode: "Online Payment",
    // Status: <span className="badge badge-danger-transparent">Pending</span>,
    // ProductCost: "$205,500",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
  {
    PurchaseDate: "10",
    ClientName: "Aditya Birla",
    ProductID: "10",
    // Product: "Vu 80cm (32 inch) HD Ready LED TV",
    // PaymentMode: "Cash on delivered",
    // Status: <span className="badge badge-pink-transparent">Delivered</span>,
    // ProductCost: "$103,600",
    // Action: (
    //   <div className="btn-list">
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-edit"></i>
    //     </a>
    //     <a  className="btn btn-sm btn-def tx-muted">
    //       <i className="fe fe-trash"></i>
    //     </a>
    //   </div>
    // ),
  },
];
export const GlobalFilter = ({ filter, setFilter }: any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

export default function Generaltable() {
  const tableInstance = useTable(
    {
      columns: COLUMNS2,
      data: DATATABLE2,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;

  const { globalFilter, pageIndex, pageSize }: any = state;
  return (
    <Fragment>
      <>
        <div className="d-flex">
          <select
            className=" mb-4 selectpage border me-1"
            value={pageSize}
            onChange={(e: any) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="table-responsive">
        <table
          {...getTableProps()}
          className="table table-bordered text-nowrap mb-0"
        >
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                {headerGroup.headers.map((column: any) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.className}
                    key={Math.random()}
                  >
                    <span className="tabletitle">
                      {column.render("Header")}
                    </span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-angle-down mx-1"></i>
                        ) : (
                          <i className="fa fa-angle-up mx-1"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  className="text-center"
                  {...row.getRowProps()}
                  key={Math.random()}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()} key={Math.random()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        <div className="d-block d-sm-flex mt-4 align-items-center">
          <span className="">
            Page
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span className="ms-sm-auto ">
            <Button
              variant="default"
              className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" Previous "}
            </Button>
            <Button
              variant="default"
              className="btn-default tablebutton me-2 my-1"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" << "}
            </Button>
            <Button
              variant="default"
              className="btn-default tablebutton me-2 my-1"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" < "}
            </Button>
            <Button
              variant="default"
              className="btn-default tablebutton me-2 my-1"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" > "}
            </Button>
            <Button
              variant="default"
              className="btn-default tablebutton me-2 my-1"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" >> "}
            </Button>
            <Button
              variant="default"
              className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </Button>
          </span>
        </div>
      </>
    </Fragment>
  );
}
