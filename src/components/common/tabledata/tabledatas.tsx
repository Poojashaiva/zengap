import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";

export const COLUMNS1: any = [
    {
        Header: "Purchase Date",
        accessor: "PurchaseDate",
        className: "text-center ",
    },
    {
        Header: "Client Name",
        accessor: "ClientName",
        className: "text-center ",
    },
    {
        Header: "Product ID",
        accessor: "ProductID",
        className: "text-center ",
    },
    {
        Header: "Product",
        accessor: "Product",
        className: "text-center ",
    },
    {
        Header: "Product Cost",
        accessor: "ProductCost",
        className: "text-center ",
    },
    {
        Header: "Payment Mode",
        accessor: "PaymentMode",
        className: "text-center ",
    },
    {
        Header: "Status",
        accessor: "Status",
        className: "text-center ",
    },
];

export const DATATABLE1 = [
    {
        PurchaseDate: "#01",
        ClientName: "Tiger Nixon",
        ProductID: "PRO12345",
        Product: "Mi LED Smart TV 4A 80",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$320,800",
        color: "badge badge-success",
    },
    {
        PurchaseDate: "#02",
        ClientName: "Garrett Winters",
        ProductID: "PRO8765",
        Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-primary">Add Cart</span>,
        ProductCost: "$170,750",
    },
    {
        PurchaseDate: "#03",
        ClientName: "Ashton Cox",
        ProductID: "PRO54321",
        Product: "Vu 80cm (32 inch) HD Ready LED TV",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$86,000",
    },
    {
        PurchaseDate: "#04",
        ClientName: "Cedric Kelly",
        ProductID: "PRO97654",
        Product: "Micromax 81cm (32 inch) HD Ready LED TV",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-secondary">Delivering</span>,
        ProductCost: "$433,060",
    },
    {
        PurchaseDate: "#05",
        ClientName: "Airi Satou",
        ProductID: "PRO4532",
        Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-danger">Shipped</span>,
        ProductCost: "$162,700",
    },
    {
        PurchaseDate: "#06",
        ClientName: "Brielle Williamson",
        ProductID: "PRO6789",
        Product: "Digisol DG-HR3400 Router ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-secondary">Delivering</span>,
        ProductCost: "$372,000",
    },
    {
        PurchaseDate: "#07",
        ClientName: "Herrod Chandler",
        ProductID: "PRO4567",
        Product: "Dell WM118 Wireless Optical Mouse",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$137,500",
    },
    {
        PurchaseDate: "#08",
        ClientName: "Rhona Davidson",
        ProductID: "PRO32156",
        Product: "Dell 16 inch Laptop Backpack ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-pink">Delivered</span>,
        ProductCost: "$327,900",
    },
    {
        PurchaseDate: "#09",
        ClientName: "Colleen Hurst",
        ProductID: "PRO35785",
        Product: "Mi LED Smart TV 4A 80",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-danger">Shipped</span>,
        ProductCost: "$205,500",
    },
    {
        PurchaseDate: "#10",
        ClientName: "Sonya Frost",
        ProductID: "PRO23409",
        Product: "Vu 80cm (32 inch) HD Ready LED TV",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-secondary">Delivering</span>,
        ProductCost: "$103,600",
    },
    {
        PurchaseDate: "#11",
        ClientName: "Jena Gaines",
        ProductID: "PRO12345",
        Product: "Digisol DG-HR3400 Router",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$90,560",
    },
    {
        PurchaseDate: "#12",
        ClientName: "Quinn Flynn",
        ProductID: "PRO64326",
        Product: "Dell 16 inch Laptop Backpack",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$342,000",
    },
    {
        PurchaseDate: "#13",
        ClientName: "Charde Marshall",
        ProductID: "PRO87563",
        Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$470,600",
    },
    {
        PurchaseDate: "#14",
        ClientName: "Haley Kennedy",
        ProductID: "PRO65439",
        Product: "Mi LED Smart TV 4A 80",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$313,500",
    },
    {
        PurchaseDate: "#15",
        ClientName: "Tatyana Fitzpatrick",
        ProductID: "PRO097254",
        Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
        PaymentMode: "Cash on delivered ",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$385,750",
    },
    {
        PurchaseDate: "#16",
        ClientName: "Michael Silva",
        ProductID: "PRO45312",
        Product: "Mi LED Smart TV 4A 80",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-danger">Shipped</span>,
        ProductCost: "$198,500",
    },
    {
        PurchaseDate: "#17",
        ClientName: "Paul Byrd",
        ProductID: "PRO45674",
        Product: "Digisol DG-HR3400 Router",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$725,000",
    },
    {
        PurchaseDate: "#18",
        ClientName: "Gloria Little",
        ProductID: "PRO34653",
        Product: "Dell WM118 Wireless Optical Mouse",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$237,500",
    },
    {
        PurchaseDate: "#19",
        ClientName: "Bradley Greer",
        ProductID: "PRO24467",
        Product: "Dell 16 inch Laptop Backpack ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$132,000",
    },
    {
        PurchaseDate: "#20",
        ClientName: "Dai Rios",
        ProductID: "PRO35323",
        Product: "Vu 80cm (32 inch) HD Ready LED TV",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$217,500",
    },
    {
        PurchaseDate: "#21",
        ClientName: "Jenette Caldwell",
        ProductID: "PRO56793",
        Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$345,000",
    },
    {
        PurchaseDate: "#22",
        ClientName: "Yuri Berry",
        ProductID: "PRO32156",
        Product: "Dell 16 inch Laptop Backpack ",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$675,000",
    },
    {
        PurchaseDate: "#23",
        ClientName: "Caesar Vance",
        ProductID: "PRO4567",
        Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$106,450",
    },
    {
        PurchaseDate: "#24",
        ClientName: "Doris Wilder",
        ProductID: "PRO6789",
        Product: "Dell WM118 Wireless Optical Mouse",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-danger">Shipped</span>,
        ProductCost: "$85,600",
    },
    {
        PurchaseDate: "#25",
        ClientName: "Angelica Ramos",
        ProductID: "PRO4532",
        Product: "Digisol DG-HR3400 Router ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$1,200,000",
    },
    {
        PurchaseDate: "#26",
        ClientName: "Gavin Joyce",
        ProductID: "PRO97654",
        Product: "Dell WM118 Wireless Optical Mouse",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$92,575",
    },
    {
        PurchaseDate: "#27",
        ClientName: "Jennifer Chang",
        ProductID: "PRO45412",
        Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-danger">Shipped</span>,
        ProductCost: "$357,650",
    },
    {
        PurchaseDate: "#28",
        ClientName: "Brenden Wagner",
        ProductID: "PRO12345",
        Product: "Dell 16 inch Laptop Backpack",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-info">Add to Cart</span>,
        ProductCost: "$206,850",
    },
    {
        PurchaseDate: "#29",
        ClientName: "Fiona Green",
        ProductID: "PRO8765",
        Product: "Digisol DG-HR3400 Router ",
        PaymentMode: "Cash on delivered",
        Status: <span className="badge badge-orange">Pending</span>,
        ProductCost: "$850,000",
    },
    {
        PurchaseDate: "#30",
        ClientName: "Shou Itou",
        ProductID: "PRO54321",
        Product: "Dell WM118 Wireless Optical Mouse",
        PaymentMode: "Online Payment",
        Status: <span className="badge badge-success">Delivered</span>,
        ProductCost: "$163,000",
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


export default function BasicTable() {
    const tableInstance = useTable(
        {
            columns: COLUMNS1,
            data: DATATABLE1,
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
                        onChange={(e) => setPageSize(Number(e.target.value))}
                    >
                        {[10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
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
                                        className={column.className} key={Math.random()}
                                    >
                                        <span className="tabletitle">{column.render("Header")}</span>
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
                                <tr className="text-center" {...row.getRowProps()} key={Math.random()}>
                                    {row.cells.map((cell: any) => {
                                        return (
                                            <td {...cell.getCellProps()} key={Math.random()}>{cell.render("Cell")}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="d-block d-sm-flex mt-4 align-items-center">
                    <span className="">
                        Page
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                    <span className="ms-sm-auto ">
                        <Button
                            variant=""
                            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                        >
                            {" Previous "}
                        </Button>
                        <Button
                            variant=""
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
    )
}
