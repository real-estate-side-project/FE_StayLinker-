import Wishlist from './components/Wishlist';
import CommunityPost from './components/CommunityPost';
import MyComment from './components/MyComment';

export const consumerSidebarData = [
    {
        title: 'MY ACTIVITY',
        services: ['Wishlist', 'Community Post', 'My Comment']
    },
    {
        title: 'Chat',
        services: ['Chat with Agents', 'Resale Market Chat List']
    },
    {
        title: 'MY INFORMATION',
        services: ['Edit Profile']
    },
    {
        title: '고객센터',
        services: ['FAQ', '1:1 Q&A']
    }
];

export const businessSidebarData = [
    {
        title: 'MY ACTIVITY',
        services: ['Business Dashboard', 'Orders', 'Inventory']
    },
    {
        title: 'Customer Support',
        services: ['Chat with Support', 'View Messages']
    },
    {
        title: 'Business Settings',
        services: ['Manage Profile', 'Business Policies']
    }
];

export const adminSidebarData = [
    {
        title: 'Admin Dashboard',
        services: ['User Management', 'Reports', 'System Settings']
    },
    {
        title: 'System Monitoring',
        services: ['Server Status', 'Logs']
    }
];

export const componentMap: { [key: string]: React.ComponentType<any> } = {
    Wishlist,
    CommunityPost,
    MyComment
};
