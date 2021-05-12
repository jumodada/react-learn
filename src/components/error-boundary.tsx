import React from "react";


export class ErrorBoundary extends React.Component<any, any> {
    state = { error: null };

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    render() {
        const { error } = this.state;
        const { fallbackRender, children } = this.props;
        if (error) {
            return fallbackRender({ error });
        }
        return children;
    }
}
