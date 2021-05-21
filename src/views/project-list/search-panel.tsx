/** @jsxImportSource @emotion/react */
import React from "react";
import {Form, Input} from "antd"
import {IdSelect} from "../../components/Select"


export const SearchPanel = ({users, param, setParam}: any) => {
    return (
        <Form css={{marginBottom: '2rem', '>*': ''}} layout={'inline'}>
            <Form.Item>
                <Input
                    placeholder={'项目名'}
                    type="text"
                    value={param.name}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                />
            </Form.Item>
            <Form.Item>
                <IdSelect
                    style={{width: '200px'}}
                    value={param.personId}
                    allowClear
                    options={users}
                    placeholder={'负责人'}
                    onChange={(value: any) =>
                        setParam({
                            ...param,
                            personId: value
                        })
                    }
                >

                </IdSelect>

            </Form.Item>

        </Form>
    );
};
