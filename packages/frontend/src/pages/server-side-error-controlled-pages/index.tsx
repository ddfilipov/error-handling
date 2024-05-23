import { GetServerSideProps } from "next";
import { FC } from "react";
import { OneBoxLayout } from "src/components/layout/OneBoxLayout";
import PageLayout from "src/components/layout/PageLayout";

interface PagesUncontrolledErrorProps {
    data: any;
}

const PagesUncontrolledError: FC<PagesUncontrolledErrorProps> = ({ data }) => (
    <PageLayout>
        <OneBoxLayout pageName="Old pages api">
            <div>
                <h3>Old pages api</h3>
                <p>{`Old pages api.`}</p>
            </div>
        </OneBoxLayout>
    </PageLayout>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
    const getDataFromServer = async () => {
        const response = await fetch("http://localhost:8080/uncontrolled-error");
        if (!response.ok) {
            const data = await response.json();
            throw new Error(`Fetch error: ${data.error}`);
        }
        const data = await response.json();
        return data;
    };

    try {
        const data = await getDataFromServer();
        return {
            props: { data },
        };
    } catch (error) {
        console.error("Error in getServerSideProps:", error);

        return {
            redirect: {
                destination: "/500",
                permanent: false,
            },
        };
    }
};

export default PagesUncontrolledError;
