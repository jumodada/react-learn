import styled from "@emotion/styled"
import {Spin} from "antd";

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
