import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';

const SplineArea = ({ width, height }) => {
    return (
        <ChartComponent
            width={width}
            height={height}
            id="charts"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
        >
            <Inject services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]}/>
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default SplineArea