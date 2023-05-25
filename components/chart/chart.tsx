import React, {FC} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

import {primaryColor} from '../header';

export const windowWidth = Dimensions.get('window').width;

type Weight = {
  weight: number;
  note: string | undefined;
  createdAt: Date;
};

const Chart: FC<{weights: Weight[]}> = ({weights}) => {
  if (weights.length < 1) {
    return null;
  }

  const labels: string[] = [];
  const data: number[] = [];
  weights.forEach(w => {
    labels.push(`${w.createdAt.getDate()}/${w.createdAt.getMonth() + 1}`);
    data.push(w.weight);
  });
  return (
    <LineChart
      bezier
      height={250}
      width={windowWidth - 30}
      chartConfig={chartConfig}
      style={styles.chart}
      data={{labels, datasets: [{data}]}}
    />
  );
};

const styles = StyleSheet.create({
  chart: {
    marginLeft: 15,
    borderRadius: 10,
  },
});

const chartConfig = {
  backgroundColor: primaryColor,
  backgroundGradientFrom: primaryColor,
  backgroundGradientTo: '#FFA726',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

export default Chart;
