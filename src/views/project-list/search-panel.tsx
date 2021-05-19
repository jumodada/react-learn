/** @jsxImportSource @emotion/react */
import React from "react";
import {Form, Input, Select} from "antd";
import {IdSelect} from "../../components/select";

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string;
}

interface SearchPanelProps {
    users: User[];
    param: {
        name: string;
        personId: string;
    };
    setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
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
