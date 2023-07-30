import React, {Component} from 'react';
interface Props{
    children: React.ReactNode
}
interface State{
    hasError: boolean,
    Error?: null | Error,
    ErrorInfo?: null | React.ErrorInfo
}
class ErrorBoundary extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
            Error: null,
            ErrorInfo: null
        }
    }
    static getDerivedStateFromError(error: Error): State{
        return {
            hasError: true
        }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState((prevState)=>({
            hasError: prevState.hasError,
            Error: error,
            ErrorInfo: errorInfo
        }))
        console.log(errorInfo)
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>{`Error: ${this.state.Error?.message}`}</h1>
                    <h2>{this.state.ErrorInfo?.componentStack}</h2>
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary;