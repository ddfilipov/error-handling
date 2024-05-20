import React, { PropsWithChildren } from "react";

type ErrorProps = {
    fallbackComponent: React.ReactNode;
} & PropsWithChildren;

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorProps> {
    public state: State;
    constructor(props: ErrorProps) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error: Error, errorInfo: any) {
        console.log({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallbackComponent;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
