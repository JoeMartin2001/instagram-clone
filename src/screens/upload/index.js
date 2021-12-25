import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const UploadScreen = () => {
  const [image, setImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }

  return (
    <View>
      <Text>UploadScreen</Text>

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Upload image" onPress={pickImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageView: {
    width: 200,
    height: 200,
  },
})

export default UploadScreen
