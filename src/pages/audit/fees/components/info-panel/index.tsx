import React from 'react'
import { Table } from 'antd'
import { IData } from '../../type'
import { ColumnsType } from 'antd/lib/table';
import { spawn } from 'child_process';

export default ({ props }) => {
    const columns:ColumnsType<IData> = [
        {
          title: "公司代码",
          dataIndex: "ts_code",
          width: 230,
          fixed: "left",
          render: (_,row) => {   
                      return <span>
                          【{row.ts_code}】{row.name}
                      </span>
                  }
        },   
        {
          title: "市场",
          dataIndex: "market",
          width: 110,
          sortOrder:'ascend'
        },
        {
          title: "行业",
          dataIndex: "industry",
          width: 100,
          sortOrder:'ascend'
        },
        {
          title: "地区",
          dataIndex: "area",
          width: 100,
          sortOrder:'ascend'
        },
        
        {
          title: "期间",
          dataIndex: "end_date",
          width: 130,
          sortOrder:'ascend'
        },
        {
          title: "公告日期",
          dataIndex: "ann_date",
          width: 130,
          sortOrder:'ascend'
        },
        {
          title: "会计师事务所",
          dataIndex: "audit_agency",
          width:300,
          sortOrder:'ascend'
        },
        {
          title: "审计意见",
          dataIndex: "audit_result",
          width:200,
          sortOrder:'ascend'
        },
        {
          title: "审计费用",
          dataIndex: "audit_fees",
          width: 150,
          sortOrder:'ascend'
        },
        {
          title: "签字注师",
          dataIndex: "audit_sign",
          width: 200,
        //   render: (h, params) => {
                      
        //               let cpas = params.row.audit_sign && params.row.audit_sign.split(/,|、/)
                     
        //                cpas = cpas && cpas.reduce((acc,cpa,index) => {
        //                  acc.push(h('a',{ props:{ href:'#'}, on: { click:()=>{ this.cpa=cpa;this.showModal(); }}}, cpa))
        //                   if(index !== (cpas.length-1)) acc.push(h('span',null,'，'))
        //                   return acc
        //               },[])
                      
        //               return h('div', cpas);
        //           }
        }
      ]

    return (
        <Table style={{ margin: '0 10%', background: 'white' }}
            loading={props.loading}
            dataSource={props.data}
            columns={columns}
            rowKey='ts_code'
            pagination={{
                total:props.total,
                onChange:props.onPageChange,
                showTotal(total){
                    return `数据总量：${total}`
                }        
            }}
            scroll={{x:1300}}
            
        ></Table>
    )
};