import { Company } from "@common/types";
import { FC } from "react";

interface DataViewerProps {
    data: Company;
}

export const DataViewer: FC<DataViewerProps> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
