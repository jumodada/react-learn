import styled from "@emotion/styled"
import {Button, Spin, Typography} from "antd";
import React from "react";

export const Row = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.between ? 'space-between' : undefined};
  margin-bottom: ${props => props.marginBottom + 'rem'};
  padding: ${props => props.padding + 'rem'};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props: any) => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullScreenLoading = () => <FullScreen>
    <Spin size={'large'}>

    </Spin>
</FullScreen>



export const FullPageErrorFallback = ({ error }: any) => (
    <FullScreen>
        <ErrorBox error={error} />
    </FullScreen>
);

const isError = (value: any): any => value?.message;
export const ErrorBox = ({ error }: any) => {
    if (isError(error)) {
        return <div>
            <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
        </div>
    }
    return null;
};

export const ButtonNoPadding = styled(Button)`
    padding: 0;
`
