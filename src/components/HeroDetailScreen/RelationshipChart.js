import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import findRelationship from '../../utils/findRelationship';
import * as d3 from 'd3';
import {Surface, Shape, Group} from '@react-native-community/art';

const styles = StyleSheet.create({
  root: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'rgba(32,39,44,0.5)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 5,
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  chart: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  chartContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    flex: 1,
  },
  legendContainer: {
    paddingLeft: 20,
  },
  legend: {
    flexDirection: 'row',
  },
});

const PIE_RADIUS = 180;

const RelationshipChart = ({comics, hero, isRetrivingComics}) => {
  const {
    root,
    title,
    chart,
    titleText,
    chartContainer,
    legend,
    legendContainer,
  } = styles;

  const relationshipData = findRelationship(comics, hero).filter(
    interaction => interaction.number > 1,
  );

  const arcs = d3.pie().value(d => d.number)(relationshipData);

  const paths = arcs.map(arc => {
    return d3
      .arc()
      .innerRadius(0)
      .outerRadius(PIE_RADIUS / 2)
      .startAngle(arc.startAngle)
      .endAngle(arc.endAngle)
      .padAngle(0.05)();
  });

  const renderTitle = () => (
    <View style={title}>
      <Text style={titleText}>Freqently interacted heroes</Text>
    </View>
  );

  const renderChart = () => (
    <Surface width={PIE_RADIUS} height={PIE_RADIUS}>
      <Group x={PIE_RADIUS / 2} y={PIE_RADIUS / 2}>
        {paths.map((item, index) => {
          return (
            <Shape
              key={'pie_shape_' + index}
              fill={colorArray[index] || 'black'}
              stroke={colorArray[index] || 'black'}
              d={item}
            />
          );
        })}
      </Group>
    </Surface>
  );

  const renderLegend = () =>
    arcs.map((arc, index) => (
      <View style={legend}>
        <Text key={index} style={{color: colorArray[index]}}>
          {arc.data.name}
        </Text>
      </View>
    ));

  const renderChartSection = () => (
    <View style={chartContainer}>
      <View style={chart}>{renderChart()}</View>
      <View style={legendContainer}>{renderLegend()}</View>
    </View>
  );

  return (
    !isRetrivingComics && (
      <View style={root}>
        {renderTitle()}
        {renderChartSection()}
      </View>
    )
  );
};

var colorArray = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF',
];

export default RelationshipChart;
