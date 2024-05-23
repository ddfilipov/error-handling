import RootLayout from "@/app/layout";

const withRootLayout = (PageComponent: React.ComponentType) => {
    const WrappedComponent = (props: any) => (
        <RootLayout>
            <PageComponent {...props} />
        </RootLayout>
    );

    // Set the display name for debugging purposes
    WrappedComponent.displayName = `withRootLayout(${PageComponent.displayName || PageComponent.name || "Component"})`;

    return WrappedComponent;
};

export default withRootLayout;
