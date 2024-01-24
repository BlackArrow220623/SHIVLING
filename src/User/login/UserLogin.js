import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, StatusBar, ImageBackground, Modal, } from 'react-native';
import BTextBox from '../../components/textBox/BTextBox';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createNavigationContainerRef } from '@react-navigation/core';
import Fonts from '../../Utils/fonts/Fonts';
import colors from '../../Utils/Constants/Colors';
import Labels from '../../Utils/Constants/Labels';
import BButton from '../../components/button/BButton';




class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeID: { value: "", error: "" },
            password: { value: "", error: "" },
            isKeepMeSigned: false,
            isShowPassword: true,
            userList: [],
            isLoading: false,
            disabled: false,
            buid: 2,
            visible: false

        }
    }

    adminLogin = () =>{
        this.setState({
            isLoading: false,
            disabled: false,
            employeeID: { ...this.state.employeeID, error: ""},
            password: { ...this.state.password, error: "" },
        });
        this.props.navigation.navigate(Labels.path.adminLogin)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.primary }}>
                <ScrollView>
                    <View style={{ display: 'flex' }}>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20%", paddingBottom: "5rem" }}>
                            {/* <Image style={CommonStyles.image} source={require('../assets/image/logo.png')} /> */}

                            <Text style={[{ fontFamily: Fonts.regular, fontSize: 18, marginTop: "15%", fontWeight: 400 }, { color: colors.sandal }]}>{Labels.login.signInWithEmployeeID}</Text>
                        </View>
                    </View>

                    <View style={{ display: "flex", padding: 10, margin: 10 }}>
                        <View style={{ padding: 10 }}>
                            <BTextBox
                                label={Labels.login.employeeID}
                                value={this.state.employeeID.value}
                                mode="flat"
                                keyboardType='numeric'
                                maxLength={6}
                                onChangeText={(e) => {
                                    this.setState({
                                        employeeID: { value: e, error: "" }
                                    })
                                }}
                                errorText={this.state.employeeID.error}
                            >
                            </BTextBox>
                        </View>
                        <View style={{ padding: 10 }}>
                            <BTextBox
                                label={Labels.login.password}
                                value={this.state.password.value}
                                mode="flat"
                                secureTextEntry={this.state.isShowPassword}
                                errorText={this.state.password.error}
                                onChangeText={(e) => {
                                    this.setState({
                                        password: { value: e, error: "" }
                                    })
                                }}
                            // right={<TextInput.Icon onPress={() => this.setState({ isShowPassword: !this.state.isShowPassword })} icon={this.state.isShowPassword ? "eye" : "eye-off"} />}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
                            <View style={{ flex: 1, alignItems: "flex-start" }}>
                                <View style={{}}>
                                    <TouchableOpacity onPress={this.forgotPasswordHandling}>
                                        <Text style={{ color: colors.sandal, paddingVertical: 10 }}>{Labels.login.forgotPassword}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                                <View style={{}}>
                                    <TouchableOpacity onPress={this.adminLogin}>
                                        <Text style={{ color: colors.sandal, paddingVertical: 10 }}>{Labels.login.admin}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 5 }}>
                            <BButton
                                title={Labels.login.signIn}
                                onPress={() => this.onSubmit()}
                                isLoading={this.state.isLoading}
                                disabled={this.state.disabled}>
                            </BButton>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default UserLogin