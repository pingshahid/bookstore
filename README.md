# Book Store React native App:

# Requirement
Develop a book store application in React Native

use APIs from

https://openlibrary.org/developers/api for data 

The application should work on both iOS and Android (just the latest OS is fine for both)

The app should have the following features


1. Ability to browse books through a paginated view (by name)

2. Ability to browse books through a paginated view (by author)

3. Ability to search for a book

4. View details of a book (including a picture of the cover)

#Assumption

For browse books through a paginated view by name, i have used the https://openlibrary.org/dev/docs/api/search api and passing the title name from env file which can be change from evn file

For browse books through a paginated view by author, i have used the https://openlibrary.org/authors/OL23919A/works.json api and passing the author id from env file, which can be change from env file


#Solution
For developing the appliation i have majorly used the following library for app architecture

    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "@reduxjs/toolkit": "^1.9.3",

I am using Redux for state management and using the latest redux toolkit library
For each feature i am creating a slice using createSlice which is redux toolkit function

# Api folder
this folder contains the books.js which is used to fire https request and fetch the data and set that data in to redux store with the help of reducers

# Configurations folder
App starts with the App.tsx and then Root.js
AppNavigator.js is used for creating navigation stack
store.js is used for redux store configuration
all the above files are resides in to folder named configurations

# Env folder
books.json contains the env variable
 "API_URL": "https://openlibrary.org/",
 "AUTHOR_ID": "OL23919A", -> author id is used to load the list of books for this author we can change here to load for different author 
 "BOOKS_TITLE": "Lords of the rings" -> book title is used to load the books for the added title and user can browse the books horizantaly, this can change and load for new title
 
 # Screens folder
 This folder contains the two main component of the application 
 1. BookScreenComponent
 2. BookDetailsScreenComponent
 
 rest of the component added in this folder to split the ui logic in to smaller components and followed the SRP design principles
 
 #slices
 
 This folder contains the slices for the feature that we are listing in the app also it creates a reducer which is register to the store for state management in the redux
 
# Install and run the app command

run npm i in root folder
run bundle exec pod install inside ios folder
install app using xcode or from react-native start ios
 
# Highlevel diagram of implementation

<img width="363" alt="Screenshot 2023-03-27 at 5 08 03 PM" src="https://user-images.githubusercontent.com/9390068/227930985-f7499188-9d92-4e74-bd48-b2525cbb27c9.png">





