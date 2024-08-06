

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import YouTubeIframe from 'react-native-youtube-iframe'; 
import { getAnimal } from './api/animal.js';
import { getKids } from './api/kids.js';
import { getStories } from './api/allapi.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const extractVideoId = (url) => {
  if (!url) return null;
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const Dash = () => {
  const [stories, setStories] = useState([]);
  const [kidsstories, setKidsstories] = useState([]);
  const [animalstories, setAnimalstories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
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

  const handleImagePress = (item) => {
    const videoId = extractVideoId(item.link);
    if (videoId) {
      setSelectedVideoId(videoId);
      setSelectedVideoTitle(item.title);
      setModalVisible(true);
    } else {
      console.error('Invalid video URL:', item.link);
    }
  };

  const handleSharePress = () => {
    setShareModalVisible(true);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
    setSelectedVideoTitle('');
    setModalVisible(false);
  };

  const closeShareModal = () => {
    setShareModalVisible(false);
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



  const renderStoryItem = ({ item }) => (
    <TouchableOpacity style={styles.storyItemContainer} onPress={() => handleImagePress(item)}>
      <View style={styles.storyItem}>
        {/* <TouchableOpacity onPress={() => handleImagePress(item)}> */}
            <Image source={item.image} style={styles.image} />

        {/* </TouchableOpacity> */}
        <View style={styles.titleContainer}>
          {Array(4).fill().map((_, i) => (
            <Icon key={i} name="star" size={14} color="orange" style={styles.starIcon} />
          ))}
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={handleSharePress}>
            <Icon name="share-alt" size={14} color="black" style={styles.shareIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  


  

  return (
    <View style={styles.screenContainer}>
      <View style={[styles.header, { backgroundColor: '#F8F8FF' }]}>
        <Text style={styles.subtitle}>S t <Text style={styles.subtitleo}>o r <Text style={styles.subtitlet}>y H
        <Text style={styles.subtitleh}> u b</Text></Text></Text></Text>
        <Image source={require('../images/user1.png')} style={styles.logo} />
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
        <TouchableOpacity style={styles.sectionButtontt}>
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
          </TouchableOpacity>
          <View style={styles.videoContainer}>
            {selectedVideoId && (
              <YouTubeIframe
                videoId={selectedVideoId}
                height={300}
                play={true}
              />
            )}
          </View>
        </View>
      </Modal>

      <Modal
        visible={shareModalVisible}
        animationType="slide"
        onRequestClose={closeShareModal}
      >
        <View style={styles.shareModalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeShareModal}>
            <Icon name="close" size={30} color="black" style={styles.closeButtonText} />
          </TouchableOpacity>
          <View style={styles.shareOptionsContainer}>
            <TouchableOpacity style={styles.shareOption} onPress={() => console.log('Share to Instagram')}>
              <Icon name="instagram" size={30} color="black" />
              <Text style={styles.shareOptionText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareOption} onPress={() => console.log('Share to WhatsApp')}>
              <Icon name="whatsapp" size={30} color="black" />
              <Text style={styles.shareOptionText}>WhatsApp</Text>
            </TouchableOpacity>
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
    marginTop:8,
    width: 30,
    height: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginBottom:5,
    alignContent:'space-around',
  
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
    marginHorizontal:3,
  },
  sectionButtont: {
    padding: 6,
    backgroundColor: '#377E47',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:3,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    color:'white'
  },
  closeButtonText: {
    fontSize: 30,
    color:'white',
    backgroundColor:'black'
  },
  videoContainer: {
    width: '100%',
    height: 300,
  },
  shareModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareOptionsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  shareOptionText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default Dash;
