import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'

import Card from '@/components/Card'
import Gap from '@/components/Gap'

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} />
        
        <View style={styles.title_wrapper}>
          <MaterialIcons name="menu" size={24} color="#4F4F4F" />
          <Text style={styles.title_header}>Dashboard</Text>
        </View>

        <Card>
          <Text style={[styles.card_text, { opacity: .7, fontSize: 15, marginBottom: 6 }]}>
            Available Balance
          </Text>

          <Text style={[styles.card_text, { fontFamily: 'InterSemiBold', fontSize: 29, marginBottom: 22 }]}>
            Rp. 4.000.000
          </Text>

          <Text style={[styles.card_text, { fontSize: 14 }]}>
            See details
          </Text>
        </Card>

        <Gap mb={12} />

        <Card>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={[styles.card_text, {marginBottom: 5}]}>
                Budger for January
              </Text>

              <Text style={[styles.card_text, {opacity: .7}]}>
                Cash Available
              </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={[styles.card_text, {fontSize: 21, fontFamily: 'InterSemiBold'}]}>
                Rp. 2,5jt
              </Text>
            </View>
          </View>
        </Card>

        <Gap mb={20} />

        <Card customStyle={styles.saving}>
          <Text style={{ color: '#030303', fontSize: 16, fontFamily: 'InterSemiBold', marginBottom: 6 }}>Create a Saving goal</Text>
          <Text style={{ color: '#818181', fontSize: 13 }}>to keep track of your</Text>
        </Card>

        <View style={{ marginLeft: 10, marginTop: 18 }}>
          <Text style={{ fontSize: 15, fontFamily: 'InterSemiBold', lineHeight: 24 }}>Cash</Text>

          <View style={{ flexDirection: 'row', marginTop: 12, gap: 12 }}>
            <Card customStyle={styles.cash_income}>
              <View style={[styles.cash_expense_icon, { backgroundColor: '#47B6D4' }]}>
                <MaterialIcons name="account-balance" size={20} color="#FFF" />
              </View>

              <Text style={{ marginTop: 40, fontSize: 17, fontFamily: 'InterBold', lineHeight: 24, marginBottom: 6 }}>Rp. 3,2jt</Text>
              <Text style={{ fontSize: 14, color: '#686868' }}>Income</Text>
            </Card>

            <Card customStyle={styles.cash_expense}>
              <View style={[styles.cash_expense_icon, { backgroundColor: '#EE1E5F' }]}>
                <MaterialIcons name="account-balance-wallet" size={20} color="#FFF" />
              </View>

              <Text style={{ marginTop: 40, fontSize: 17, fontFamily: 'InterBold', lineHeight: 24, marginBottom: 6 }}>Rp. 1,2jt</Text>
              <Text style={{ fontSize: 14, color: '#686868' }}>Expense</Text>
            </Card>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    padding: 20
  },
  title_wrapper: {
    flexDirection: 'row',
    marginBottom: 31
  },
  title_header: {
    color: '#030303',
    fontFamily: 'InterBold',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  card_text: {
    fontFamily: 'InterRegular',
    color: '#FFFFFF',
  },
  saving: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(74, 85, 104, 0.07)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8
  },
  cash_income: {
    backgroundColor: '#DAF0F6', 
    flex: 1,
    padding: 17
  },
  cash_expense: {
    backgroundColor: '#FCD2DF',
    flex: 1,
    padding: 17
  },
  cash_expense_icon: {
    width: 40, 
    height: 40, 
    flexShrink: 0, 
    borderRadius: 50, 
    opacity: .6, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})
