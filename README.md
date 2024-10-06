# QuickCSV

QuickCSV is a simple React application that allows users to input text items, manage them in a list, and download the list as a CSV file. You can also follow the creator on Instagram directly from the app.

## Features

- Add items to a list.
- Clear individual items from the list.
- Download the list as a CSV file.
- Follow the creator on Instagram.

## Technologies Used

- React
- Vite
- Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shawaiz-khan/quickcsv.git
   ```

2. Navigate to the project directory:
   ```bash
   cd quickcsv
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the app in action.

## Usage

1. **Add Item**: Type an item in the input field and either press `Enter` or click the "Add" button to add it to the list.
2. **Clear Item**: Click the "Clear" button next to any item in the list to remove it.
3. **Download CSV**: Click the "Download CSV" button to download all items in the list as a CSV file.
4. **Follow on Instagram**: Click the "Follow on Instagram" button to open the creator's Instagram profile in a new tab.

## Code Explanation

- The application uses the `useState` hook to manage the state of items.
- Items can be added and cleared using respective functions.
- The `handleDownloadCSV` function converts the list of items into a CSV format and triggers a download.
- The `handleFollow` function opens the creator's Instagram profile in a new tab.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- **Shawaiz Khan**  
  [Instagram](https://www.instagram.com/shawaizkhan.dev/)

## Acknowledgments

- Thanks to the React community for their resources and support.