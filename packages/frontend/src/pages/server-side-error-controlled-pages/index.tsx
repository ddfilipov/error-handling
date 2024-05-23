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

export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
    const getDataFromServer = async () => {
        const response = await fetch("http://localhost:8080/uncontrolled-error");
        const data = await response.json();
        return data;
    };
    const data = await getDataFromServer();
    throw new Error("ERROR EN SERVIDOR");
    return {
        props: { data: data },
    };
};

export default PagesUncontrolledError;
