import React from 'react'
import { Form, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss'
import { getFieldCom } from "../../util/fields";
import moment from "moment";
const { Item: FormItem } = Form
//ant-col 有趣的比例问题，标签宽度也是按照24的比例来计算。复合比例
type IProps = {
  page: string[],
  onFinish: (values: any) => void
}

export default ({ page, onFinish }: IProps) => {
  const [form] = Form.useForm()
  const handleFinish = (values: any) => {
    onFinish(values)
  };
  if (!page.length) return <div></div>
  let lastRow
  if (page.length % 2 === 1) {
    const ComBottom = getFieldCom(page.pop()!)
    lastRow = <ComBottom labelCol={{ span: 2 }}></ComBottom>
  }
  const Com1 = getFieldCom(page.shift()!)
  const Com2 = getFieldCom(page.shift()!)
  const firstRow = (
    <FormItem
      noStyle
    >
      <Row>
        <Col span={12}>
          <Com1 labelCol={{ span: 4 }} className='search-panel__left-field'></Com1>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={ 19 }>
              <Com2 labelCol={{ span: 5}}></Com2>
            </Col>
            <Col span={3}>
              <Button type="primary" htmlType='submit' icon={<SearchOutlined />}>检索</Button>
            </Col>
          </Row>
        </Col>  

      </Row>
    </FormItem>
  )

  const middleRows = () => {
    let result: JSX.Element[] = [], key = 0
    while (page.length) {
      key++
      const ComLeft = getFieldCom(page.shift()!)
      const ComRight = getFieldCom(page.shift()!)
      result.push(
        <FormItem
          noStyle
          key={key}
        >
          <Row>
            <Col span={12}>
              <ComLeft labelCol={{ span: 4 }} className='search-panel__left-field'></ComLeft>
            </Col>
            <Col span={12}>
              <ComRight labelCol={{ span: 4 }} ></ComRight>
            </Col>
          </Row>
        </FormItem>
      )
    }
    return result
  }
  const dateFormat = 'YYYY-MM-DD'
  return (
    <div className='search-panel'>
      <Form
        form={form}
        name="basic"
        initialValues={{ timespan: [moment('1990-01-01', dateFormat), moment()] }}
        onFinish={handleFinish}
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