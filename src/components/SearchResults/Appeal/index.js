import React from "react";
import { Table } from "antd";
import Details from "./Details";
import { getStringAttr } from "@utils/Parser/strUtils";

const columns = [
  {
    title: "Medical",
    dataIndex: "services",
    key: "medical",
    render: (services) => getStringAttr(services.medical),
  },
  {
    title: "Food & Essential",
    dataIndex: "services",
    key: "nonmedical",
    render: (services) => getStringAttr(services.nonmedical),
  },
  {
    title: "Region",
    dataIndex: "region",
  },
  {
    title: "Submitted At",
    dataIndex: "createdAt",
  },
];

function SearchResults({ result }) {
  return (
    <div>
      <div>
        <Table
          columns={columns}
          dataSource={result}
          rowKey={(r) => r._id}
          expandable={{
            expandedRowRender: (record) => (
              <div>
                <Details record={record} />
              </div>
            ),
            expandRowByClick: true,
          }}
        />
      </div>
    </div>
  );
}

export default SearchResults;
