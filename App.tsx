import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

import Header from './components/header';
import Creator from './components/creator';
import Chart from './components/chart';
import {database} from './database/manager';

const App = () => {
  const [showCreator, setShowCreator] = useState<boolean>(false);

  const onOpenCreator = () => setShowCreator(true);

  const onHideCreator = () => setShowCreator(false);

  return (
    // <DatabaseProvider database={database}>
    <>
      <StatusBar />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header onOpenCreator={onOpenCreator} />
          <Creator
            isCreatorVisible={showCreator}
            onHideCreator={onHideCreator}
          />
          {/* <Chart /> */}
        </ScrollView>
      </SafeAreaView>
    </>
    // </DatabaseProvider>
  );
};

export default App;
