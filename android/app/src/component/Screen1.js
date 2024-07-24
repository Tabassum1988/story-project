
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import Video from 'react-native-video';
import { getStories } from './api/allapi.js';
import { getKids } from './api/kids.js';
import { getAnimal } from './api/animal.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';

const Screen1 = () => {
  const [stories, setStories] = useState([]);
  const [kidsstories, setKidsstories] = useState([]);
  const [animalstories, setAnimalstories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('');
  const [selectedSection, setSelectedSection] = useState('all');

  useEffect(() => {
    getStories()
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getKids()
      .then(data => {
        setKidsstories(data);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getAnimal()
      .then(data => {
        setAnimalstories(data);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleStoryPress = (item) => {
    setSelectedVideo(item.link);
    setSelectedVideoTitle(item.title);
    setModalVisible(true);
  };

  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItemContainer} onPress={() => handleStoryPress(item)}>
      <View style={styles.storyItem}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.titleContainer}>
          {Array(4).fill().map((_, i) => (
            <Icon key={i} name="star" size={14} color="orange" style={styles.starIcon} />
          ))}
          <Text style={styles.title}>{item.title}</Text>
          <Icon name="share-alt" size={14} color="black" style={styles.shareIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedVideoTitle('');
    setModalVisible(false);
  };

  const getDataForSection = () => {
    switch (selectedSection) {
      case 'kids':
        return kidsstories;
      case 'animal':
        return animalstories;
      case 'all':
      default:
        return stories;
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={[styles.header, { backgroundColor: '#F8F8FF' }]}>
        <Text style={styles.subtitle}>S t <Text style={styles.subtitleo}>o r <Text style={styles.subtitlet}>y H
        <Text style={styles.subtitleh}> u b</Text></Text></Text></Text>
        <Image source={require('../images1/profile.png')} style={styles.logo} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sectionButton} onPress={() => setSelectedSection('all')}>
          <Icon name="globe" size={14} color="white" />
          <Text style={styles.sectionButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButtono} onPress={() => setSelectedSection('kids')}>
          <Icon name="child" size={14} color="white" />
          <Text style={styles.sectionButtonText}>Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButtont} onPress={() => setSelectedSection('animal')}>
          <Icon name="paw" size={14} color="white" />
          <Text style={styles.sectionButtonText}>Animal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButtontt} onPress={() => setSelectedSection('animal')}>
          <Icon name="star" size={14} color="white" />
          <Text style={styles.sectionButtonText}>Top Rated</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={getDataForSection()}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.section}
      />

<Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Icon name="close" size={30} color="black" style={styles.closeButtonText} />
            {/* <Text style={styles.closeButtonText}>Close</Text> */}

          </TouchableOpacity>
          <View style={styles.videoContainer}>
            {selectedVideo && (
              <Video
                source={{ uri: selectedVideo }}
                style={styles.video}
                controls={true}
                resizeMode="contain"
              />
            )} 
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    width: '90%',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#BF0D04',
    textAlign: 'left',
    lineHeight: 24,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  subtitleo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E55C2',
    textAlign: 'left',
    lineHeight: 24,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  subtitlet: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#377E47',
    textAlign: 'left',
    lineHeight: 24,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  subtitleh: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    textAlign: 'left',
    lineHeight: 24,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  sectionButton: {
    padding: 6,
    backgroundColor: '#BF0D04',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionButtono: {
    padding: 6,
    backgroundColor: '#2E55C2',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionButtont: {
    padding: 6,
    backgroundColor: '#377E47',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionButtontt: {
    padding: 6,
    backgroundColor: '#ff6600',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionButtonText: {
    color: 'white',
    marginLeft: 4,
    fontSize: 10,
  },
  section: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
  },
  storyItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: '95%',  
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  starIcon: {
    marginHorizontal: 2,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    flex: 1,
    color: '#000000', 
    fontWeight: 'bold', 
  },
  shareIcon: {
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
 
  closeButtonText: {
    color: '#FFF',
    // color:'black',
    fontSize: 18,
    padding:10,
    backgroundColor:'black',
    borderRadius:5
  },


  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 999,
    // backgroundColor:'#4d0000',
    backgroundColor:'black'
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Screen1;
// import React from 'react';
// import { View, Text } from 'react-native';

// const Screen1 = () => {
//   return (
//     <View>
//       <Text>hiiiiiiiiiiii</Text>
//     </View>
//   );
// }

// export default Screen1;
