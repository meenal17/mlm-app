import React, {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {MDBDataTableV5} from "mdbreact";
import "../Payout/payoutSyle.css";
function PayoutSortingTable1() {
  const Data = [
    {
      infoType: "Status-Paid",
    },
    {
      infoType: "Satus-pending",
    },
    {
      infoType: "Satus-Approved",
    },
    {
      infoType: "Satus-Paid",
    },
    {
      infoType: "Satus-Rejected",
    },
  ];
  const [options2] = useState(Data);
  //   table data
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: <p className="heading">User</p>,
        field: "pic",
        // width: 200,
      },
      {
        label: <p className="heading">Name</p>,
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: <p className="heading">Invoice</p>,
        field: "Invoice",
        width: 270,
      },
      {
        label: <p className="heading">Amount</p>,
        field: "Amount",
        sort: "disabled",
        width: 100,
      },

      {
        label: <p className="heading">PayOut Method</p>,
        field: "PayOut",
        width: 200,
      },
      {
        label: <p className="heading">Paid Date</p>,
        field: "date",
        sort: "disabled",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        Invoice: "PR000114",
        PayOut: "Bank Transefer",
        date: "2011/04/25",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Garrett Winters",

        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/07/25",
        Amount: "$170",
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Ashton Cox",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/01/12",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Cedric Kelly",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/03/29",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Airi Satou",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/11/28",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Brielle Williamson",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/12/02",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Herrod Chandler",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/08/06",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Rhona Davidson",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/10/14",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Colleen Hurst",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/09/15",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Sonya Frost",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/12/13",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jena Gaines",
        PayOut: "Bank Transefer",
        PayOut: "Bank Transefer",

        date: "2008/12/19",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Quinn Flynn",
        PayOut: "Bank Transefer",
        PayOut: "Bank Transefer",

        date: "2013/03/03",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Charde Marshall",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/10/16",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Haley Kennedy",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/12/18",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Tatyana Fitzpatrick",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/03/17",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Michael Silva",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/11/27",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Paul Byrd",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/06/09",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Gloria Little",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/04/10",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Bradley Greer",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/10/13",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Dai Rios",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/09/26",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jenette Caldwell",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/09/03",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Yuri Berry",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/06/25",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Caesar Vance",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/12/12",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Doris Wilder",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/09/20",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Angelica Ramos",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/10/09",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Gavin Joyce",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/12/22",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jennifer Chang",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/11/14",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Brenden Wagner",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/06/07",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Fiona Green",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/03/11",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Shou Itou",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",
        date: "2011/08/14",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Michelle House",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/06/02",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Suki Burks",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",
        date: "2009/10/22",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Prescott Bartlett",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/05/07",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Gavin Cortez",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/10/26",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Martena Mccray",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/03/09",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Unity Butler",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/12/09",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Howard Hatfield",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/12/16",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Hope Fuentes",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/02/12",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Vivian Harrell",
        Invoice: " PR000114",
        PayOut: "Bank Transefer",

        date: "2009/02/14",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Timothy Mooney",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/12/11",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jackson Bradshaw",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/09/26",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Olivia Liang",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/02/03",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Bruno Nash",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/05/03",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Sakura Yamamoto",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/08/19",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Thor Walton",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2013/08/11",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Finn Camacho",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/07/07",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Serge Baldwin",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/04/09",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Zenaida Frank",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/01/04",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Zorita Serrano",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2012/06/01",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jennifer Acosta",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2013/02/01",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Cara Stevens",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/12/06",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Hermione Butler",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/03/21",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Lael Greer",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2009/02/27",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Jonas Alexander",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2010/07/14",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Shad Decker",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2008/11/13",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Michael Bruce",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/06/27",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
      {
        pic: <img src="../../../assets/img/dashboard/user.jpg" id="img" />,
        name: "Donna Snider",
        Invoice: "PR000114",
        PayOut: "Bank Transefer",

        date: "2011/01/25",
        Amount: <p class="amount-color amt-col2">$320,</p>,
      },
    ],
  });

  return (
    <>
      <div className="row mt-3 ml-2">
        <div className="col-lg-4">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="col-lg-3 col-sm-4">
          <Multiselect
            options={options2}
            displayValue="infoType"
            placeholder="Status-Paid"
          />
        </div>
        <div className="col-sm-2 col-lg-1 mr-2">
          <button className="btn btn-purple">Search</button>
        </div>
        <div className="col-sm-2 col-lg-1">
          <button className="btn btn-info">Reset</button>
        </div>
      </div>
      {/* table */}
      <div className="col-sm-12 col-lg-12">
        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
          pagingTop
          searchTop
          searchBottom={false}
          barReverse
        />
      </div>
      {/* table end */}
    </>
  );
}

export default PayoutSortingTable1;
