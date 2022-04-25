import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// const Shimmerloader = () => {
//   return (
//     <View>
//       <Text>Shimmerloader</Text>
//     </View>
//   );
// };

// export default Shimmerloader;

export function CategoryLoader() {
  const [CategoryLoader, setCategory] = React.useState([
    {
      id: '1',
    },
    {
      id: '1',
    },
    {
      id: '1',
    },
    {
      id: '1',
    },
  ]);

  return (

    <View style={{flexDirection:'row',}}>

     { CategoryLoader.map((item,index)=>{
          return (
            <SkeletonPlaceholder key={index} style={styles.shimmerContainer}>
            <View style={styles.shimmerItemContainer}>
              <View
                style={{
                  marginVertical: 10,
                  width: 70,
                  height: 90,
                  borderRadius: 4,
                  flexDirection:'row'
                }}></View>
            </View>
          </SkeletonPlaceholder>
          )
      })    }
    </View>

  );
}



export function ShimmerLoader({loading, item}) {
    return (
      <SkeletonPlaceholder style={styles.shimmerContainer}>
        <View style={styles.shimmerItemContainer}>
          <View
            style={{
              marginVertical: 10,
              width: 500,
              height: 80,
              borderRadius: 4,
            }}></View>
        </View>
      </SkeletonPlaceholder>
    );
  }

  export function ShimmerMarketLoader({loading, item}) {
    return (
      <SkeletonPlaceholder style={styles.shimmerContainer}>
        <View style={styles.shimmerItemContainer}>
          <View
            style={{
              marginVertical: 10,
              width: 158,
              height: 170,
              borderRadius: 4,
            }}></View>
        </View>
      </SkeletonPlaceholder>
    );
  }


  export function ShimmerStoreLoader({loading, item}) {
    return (
      <SkeletonPlaceholder style={styles.shimmerContainer}>
        <View style={styles.shimmerItemContainer}>
          <View
            style={{
              marginVertical: 10,
              width: '99%',
    height: 170,
              borderRadius: 4,
            }}></View>
        </View>
      </SkeletonPlaceholder>
    );
  }


const styles = StyleSheet.create({
  shimmerContainer: {
    borderRadius: 4,
    flexDirection:'row',
  },
  shimmerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal:8
  },
});
