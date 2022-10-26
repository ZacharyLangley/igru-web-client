import React from 'react';
import Card from '../../Card/Card';

export interface TableCardPlaceHolderProps {
    testID?: string;
};

const TableCardPlaceHolder: React.FC<TableCardPlaceHolderProps> = ({testID = 'table-card-placeholder'}) => {
    return (
        <Card testID={testID} style={{width: 934}}>
            <div style={{minHeight: 0, height: 400, backgroundColor: 'grey', borderRadius: 5}} />
        </Card>
    )
}

export default TableCardPlaceHolder;