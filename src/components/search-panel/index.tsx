import React from 'react'
import { Form, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.css'
import { getFieldCom } from "../../util/fields";

const { Item: FormItem } = Form
type IProps = {
  page : string[]
}
export default ({ page }:IProps) => {
  const [ form ] = Form.useForm()
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  if(!page.length) return <div></div>
  let lastRow
  if (page.length % 2 === 1) {
    const ComBottom = getFieldCom(page.pop()!)
    lastRow = <ComBottom labelCol={{span:2}}></ComBottom>
  }
  const Com1 = getFieldCom(page.shift()!)
  const Com2 = getFieldCom(page.shift()!)
  const firstRow = (
    <FormItem
    noStyle
    >
      <Row>
        <Col span={12}>
          <Com1 labelCol={{span:4}} className='search-panel__left-field'></Com1>
        </Col>
        <Col span={8} offset={1}>
          <Com2 className='search-panel__right-field'></Com2>
        </Col>
        <Col span={3}>
          <Button type="primary" icon={<SearchOutlined />}>检索</Button>
        </Col>
      </Row>
    </FormItem>
  )

  const middleRows = () => {
    let result = []
    while (page.length) {
      const ComLeft = getFieldCom(page.shift()!)
      const ComRight = getFieldCom(page.shift()!)
      result.push(
        <FormItem
        noStyle
        >
          <Row>
            <Col span={12}>
              <ComLeft labelCol={{span:4}} className='search-panel__left-field'></ComLeft>
            </Col>
            <Col span={12}>
              <ComRight className='search-panel__right-field'></ComRight>
            </Col>
          </Row>
        </FormItem>
      )
    }
    return result
  }
  return (
    <div className='search-panel'>
      <Form
        form={form}
        name="basic"
        initialValues={{}}
        onFinish={onFinish}
      >
        {
          firstRow
        }
        {
          middleRows()
        }
        {
          lastRow
        }
      </Form>
    </div>
  )
};