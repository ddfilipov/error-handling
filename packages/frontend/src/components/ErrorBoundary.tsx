import React, { PropsWithChildren, ReactElement } from "react";

type ErrorProps = {
    fallbackComponent: ReactElement<{ error: Error | null }>;
} & PropsWithChildren;

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorProps, State> {
    public state: State;
    constructor(props: ErrorProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error };
    }
    componentDidCatch(error: Error, errorInfo: any) {
        console.log({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return React.cloneElement(this.props.fallbackComponent as React.ReactElement, { error: this.state.error });
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
