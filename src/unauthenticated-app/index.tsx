import React, { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import { Button, Card } from 'antd'
export const UnauthenticatedApp = () => {

  const [isRegister, setIsRegister] = useState(false)
  return <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Card>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <Button type='primary' onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? 'login' : 'register'}</Button>
    </Card>

  </div>
}