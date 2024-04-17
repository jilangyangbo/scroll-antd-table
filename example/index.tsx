import 'react-app-polyfill/ie11';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom';

import ScrollTable from '../.';
import { Table, Radio, Input } from 'antd';

const { Group } = Radio;
const App = () => {
  const [value, setValue] = React.useState('Table');
  const { TextArea } = Input;
  const columns = [
    {
      title: 'No.',
      dataIndex: 'name',
      render: (text: string, record: any, index: number) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const data = [
    { name: 'zhangsan', age: 32, address: 'New York No. 1 Lake Park' },
    { name: 'jack', age: 42, address: 'London No. 1 Lake Park' },
    { name: 'tony', age: 32, address: 'Sidney No. 1 Lake Park' },
    { name: 'Tom', age: 32, address: 'London No. 2 Lake Park' },
    { name: 'Lisi', age: 32, address: 'London No. 3 Lake Park' },
    { name: 'Lisa', age: 32, address: 'London No. 4 Lake Park' },
    { name: 'Lilei', age: 32, address: 'London No. 5 Lake Park' },
    { name: 'Lili', age: 32, address: 'London No. 6 Lake Park' },
    { name: 'janny', age: 32, address: 'London No. 7 Lake Park' },
    { name: 'jannny', age: 32, address: 'London No. 8 Lake Park' },
    { name: 'tomas', age: 32, address: 'London No. 9 Lake  Park' },
  ];
  const options = [
    { label: 'antd Table', value: 'Table' },
    { label: 'scroll-antd-table', value: 'ScrollTable' },
  ];
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '40vh',
            padding: '50px',
          }}
        >
          <Radio.Group
            options={options}
            onChange={onChange}
            value={value}
            optionType="button"
            buttonStyle="solid"
          />
          {/* minus and plus button */}
          <TextArea
            rows={10}
            style={{ width: '400px', marginTop: '50px' }}
            value={`
            ${
              value == 'Table'
                ? "import { Table } from 'antd';"
                : "import ScrollTable from'scroll-antd-table';"
            } 


              <${value}
                columns={columns}
                dataSource={data}
                rowKey='name'
              />`}
          />
        </div>
        {value === 'Table' && (
          <>
            <Table
              columns={columns}
              dataSource={data}
              rowKey="name"
              pagination={{ defaultPageSize: 20 }}
              // bottomHeight={72}
            />
          </>
        )}
        {value === 'ScrollTable' && (
          <ScrollTable
            columns={columns}
            dataSource={data}
            rowKey="name"
            scroll={{ x: 1000, y: 300 }}
            pagination={{ defaultPageSize: 20 }}
          />
        )}
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
// const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
