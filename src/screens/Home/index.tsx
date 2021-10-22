import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import { Header } from '../../componentes/Header';
import { MessageList } from '../../componentes/MessageList';
import { SendMessageForm } from '../../componentes/SendMessageForm';
import { SignInBox } from '../../componentes/SignInBox';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

export function Home() {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />

        {user ? <SendMessageForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}
