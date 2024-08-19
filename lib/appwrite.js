import { ID, Account, Client, Databases } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  plaform: "com.yassan0.parkaid",
  projectId: "66bfb67000136b0df17a",
  databaseId: "66bfb804000da9b542e3",
  userCollectionId: "66bfb822001c887a6739",
  storageId: "66bfb94300352c56de0b",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.plaform);

const account = new Account(client);
const databases = new Databases(client);
export const createUser = async (email, password, fName, lName) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      fName,
      lName
    );
    if (!newAccount) throw Error;

    await signIn(email, password);
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        fName: fName,
        lName: lName,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession;
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
