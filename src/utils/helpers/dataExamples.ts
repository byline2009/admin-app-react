import {ICompany, ISelect} from '../models'

export interface MessageModel {
  user: number
  type: 'in' | 'out'
  text: string
  time: string
  template?: boolean
}

const defaultMessages: Array<MessageModel> = [
  {
    user: 4,
    type: 'in',
    text: 'How likely are you to recommend our company to your friends and family ?',
    time: '2 mins',
  },
  {
    user: 2,
    type: 'out',
    text: 'Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.',
    time: '5 mins',
  },
  {
    user: 4,
    type: 'in',
    text: 'Ok, Understood!',
    time: '1 Hour',
  },
  {
    user: 2,
    type: 'out',
    text: 'You’ll receive notifications for all issues, pull requests!',
    time: '2 Hours',
  },
  {
    user: 4,
    type: 'in',
    text: 'You can unwatch this repository immediately by clicking here: <a href="https://keenthemes.com">Keenthemes.com</a>',
    time: '3 Hours',
  },
  {
    user: 2,
    type: 'out',
    text: 'Most purchased Business courses during this sale!',
    time: '4 Hours',
  },
  {
    user: 4,
    type: 'in',
    text: 'Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided',
    time: '5 Hours',
  },
  {
    template: true,
    user: 2,
    type: 'out',
    text: '',
    time: 'Just now',
  },
  {
    template: true,
    user: 4,
    type: 'in',
    text: 'Right before vacation season we have the next Big Deal for you.',
    time: 'Just now',
  },
]

export interface UserInfoModel {
  initials?: {label: string; state: 'warning' | 'danger' | 'primary' | 'success' | 'info'}
  name: string
  avatar?: string
  email: string
  position: string
  online: boolean
}

const defaultUserInfos: Array<UserInfoModel> = [
  {
    name: 'Emma Smith',
    avatar: 'avatars/300-6.jpg',
    email: 'e.smith@kpmg.com.au',
    position: 'Art Director',
    online: false,
  },
  {
    name: 'Melody Macy',
    initials: {label: 'M', state: 'danger'},
    email: 'melody@altbox.com',
    position: 'Marketing Analytic',
    online: true,
  },
  {
    name: 'Max Smith',
    avatar: 'avatars/300-1.jpg',
    email: 'max@kt.com',
    position: 'Software Enginer',
    online: false,
  },
  {
    name: 'Sean Bean',
    avatar: 'avatars/300-5.jpg',
    email: 'sean@dellito.com',
    position: 'Web Developer',
    online: false,
  },
  {
    name: 'Brian Cox',
    avatar: 'avatars/300-25.jpg',
    email: 'brian@exchange.com',
    position: 'UI/UX Designer',
    online: false,
  },
  {
    name: 'Mikaela Collins',
    initials: {label: 'M', state: 'warning'},
    email: 'mikaela@pexcom.com',
    position: 'Head Of Marketing',
    online: true,
  },
  {
    name: 'Francis Mitcham',
    avatar: 'avatars/300-9.jpg',
    email: 'f.mitcham@kpmg.com.au',
    position: 'Software Arcitect',
    online: false,
  },

  {
    name: 'Olivia Wild',
    initials: {label: 'O', state: 'danger'},
    email: 'olivia@corpmail.com',
    position: 'System Admin',
    online: true,
  },
  {
    name: 'Neil Owen',
    initials: {label: 'N', state: 'primary'},
    email: 'owen.neil@gmail.com',
    position: 'Account Manager',
    online: true,
  },
  {
    name: 'Dan Wilson',
    avatar: 'avatars/300-23.jpg',
    email: 'dam@consilting.com',
    position: 'Web Desinger',
    online: false,
  },
  {
    name: 'Emma Bold',
    initials: {label: 'E', state: 'danger'},
    email: 'emma@intenso.com',
    position: 'Corporate Finance',
    online: true,
  },
  {
    name: 'Ana Crown',
    avatar: 'avatars/300-12.jpg',
    email: 'ana.cf@limtel.com',
    position: 'Customer Relationship',
    online: false,
  },
  {
    name: 'Robert Doe',
    initials: {label: 'A', state: 'info'},
    email: 'robert@benko.com',
    position: 'Marketing Executive',
    online: true,
  },
  {
    name: 'John Miller',
    avatar: 'avatars/300-13.jpg',
    email: 'miller@mapple.com',
    position: 'Project Manager',
    online: false,
  },
  {
    name: 'Lucy Kunic',
    initials: {label: 'L', state: 'success'},
    email: 'lucy.m@fentech.com',
    position: 'SEO Master',
    online: true,
  },
  {
    name: 'Ethan Wilder',
    avatar: 'avatars/300-21.jpg',
    email: 'ethan@loop.com.au',
    position: 'Accountant',
    online: true,
  },
]

const messageFromClient: MessageModel = {
  user: 4,
  type: 'in',
  text: 'Thank you for your awesome support!',
  time: 'Just now',
}

export interface AlertModel {
  title: string
  description: string
  time: string
  icon: string
  state: 'primary' | 'danger' | 'warning' | 'success' | 'info'
}

const defaultAlerts: Array<AlertModel> = [
  {
    title: 'Project Alice',
    description: 'Phase 1 development',
    time: '1 hr',
    icon: 'icons/duotune/technology/teh008.svg',
    state: 'primary',
  },
  {
    title: 'HR Confidential',
    description: 'Confidential staff documents',
    time: '2 hrs',
    icon: 'icons/duotune/general/gen044.svg',
    state: 'danger',
  },
  {
    title: 'Company HR',
    description: 'Corporeate staff profiles',
    time: '5 hrs',
    icon: 'icons/duotune/finance/fin006.svg',
    state: 'warning',
  },
  {
    title: 'Project Redux',
    description: 'New frontend admin theme',
    time: '2 days',
    icon: 'icons/duotune/files/fil023.svg',
    state: 'success',
  },
  {
    title: 'Project Breafing',
    description: 'Product launch status update',
    time: '21 Jan',
    icon: 'icons/duotune/maps/map001.svg',
    state: 'primary',
  },
  {
    title: 'Banner Assets',
    description: 'Collection of banner images',
    time: '21 Jan',
    icon: 'icons/duotune/general/gen006.svg',
    state: 'info',
  },
  {
    title: 'Icon Assets',
    description: 'Collection of SVG icons',
    time: '20 March',
    icon: 'icons/duotune/art/art002.svg',
    state: 'warning',
  },
]
export interface LogModel {
  code: string
  state: 'success' | 'danger' | 'warning'
  message: string
  time: string
}

const defaultLogs: Array<LogModel> = [
  {code: '200 OK', state: 'success', message: 'New order', time: 'Just now'},
  {code: '500 ERR', state: 'danger', message: 'New customer', time: '2 hrs'},
  {code: '200 OK', state: 'success', message: 'Payment process', time: '5 hrs'},
  {code: '300 WRN', state: 'warning', message: 'Search query', time: '2 days'},
  {code: '200 OK', state: 'success', message: 'API connection', time: '1 week'},
  {code: '200 OK', state: 'success', message: 'Database restore', time: 'Mar 5'},
  {code: '300 WRN', state: 'warning', message: 'System update', time: 'May 15'},
  {code: '300 WRN', state: 'warning', message: 'Server OS update', time: 'Apr 3'},
  {code: '300 WRN', state: 'warning', message: 'API rollback', time: 'Jun 30'},
  {code: '500 ERR', state: 'danger', message: 'Refund process', time: 'Jul 10'},
  {code: '500 ERR', state: 'danger', message: 'Withdrawal process', time: 'Sep 10'},
  {code: '500 ERR', state: 'danger', message: 'Mail tasks', time: 'Dec 10'},
]
const typeOptions: ISelect[] = [
  {label: 'Căn hộ', value: '1'},
  {label: 'Biệt thự', value: '2'},
  {label: 'Nhà phố', value: '3'},
  {label: 'Shop house', value: '4'},
  {label: 'Đất nền', value: '5'},
]
const internalFacilities: ISelect[] = [
  {value: '1', label: 'Chỗ đậu xe'},
  {value: '2', label: 'Công viên'},
  {value: '3', label: 'Thang máy'},
  {value: '4', label: 'Nuôi thú cưng'},
  {value: '5', label: 'Sảnh lễ tân'},
  {value: '6', label: 'Siêu thị/Shophouse'},
  {value: '7', label: 'Sân nướng BBQ'},
  {value: '8', label: 'Quán ăn/ Quán cafe'},
  {value: '9', label: 'Trung tâm thương mại'},
  {value: '10', label: 'Hồ bơi'},
  {value: '11', label: 'Bảo vệ 24/7'},
  {value: '12', label: 'Gym'},
  {value: '13', label: 'Trường học'},
  {value: '14', label: 'Vệ sinh công cộng'},
  {value: '15', label: 'Hiệu thuốc / Bệnh viện'},
  {value: '16', label: 'Khu thể thao ngoài trời'},
  {value: '17', label: 'Khu vui chơi trẻ em'},
  {value: '18', label: 'Phòng sinh hoạt cộng đồng'},
]
const directionOptions: ISelect[] = [
  {value: '1', label: 'Đông'},
  {value: '2', label: 'Tây'},
  {value: '3', label: 'Nam'},
  {value: '4', label: 'Bắc'},
  {value: '5', label: 'Đông-Bắc'},
  {value: '6', label: 'Đông-Nam'},
  {value: '7', label: 'Tây-Bắc'},
  {value: '8', label: 'Tây-Nam'},
]

const companyOptions: ICompany[] = [{id: '1', name: 'PHATDAT COPORATION'}]
const statusProjectOptions: ISelect[] = [
  {value: '1', label: 'Đang cập nhật'},
  {value: '2', label: 'Sắp mở bán'},
  {value: '3', label: 'Đang mở bán'},
  {value: '4', label: 'Đã bàn giao'},
]
const statusResidentOptions: ISelect[] = [
  {value: 'onsale', label: 'Đang bán'},
  {value: 'start', label: 'Khởi công'},
  {value: 'expired', label: 'Hết hàng'},
  {value: 'hand_over', label: 'Đã bàn giao'},
]
const typeHousingOptions: ISelect[] = [
  {value: '1', label: 'Studio'},
  {value: '2', label: '1PN'},
  {value: '3', label: '1PN+'},
  {value: '4', label: '2PN'},
  {value: '5', label: '2PN+'},
  {value: '6', label: '3PN'},
  {value: '7', label: '4PN'},
  {value: '8', label: 'Penthouse'},
  {value: '9', label: 'Shophouse'},
  {value: '10', label: 'Duplex'},
  {value: '11', label: 'Sky villa'},
  {value: '12', label: 'Dual-Key'},
  {value: '13', label: 'Officetel'},
  {value: '14', label: 'Văn Phòng'},
]
const typeFacilityOptions: ISelect[] = [
  {value: '1', label: 'Trường học'},
  {value: '2', label: 'Bệnh viện/Trạm y tế'},
  {value: '3', label: 'Chợ'},
  {value: '4', label: 'Trung tâm thương mại'},
  {value: '5', label: 'Khu công nghiệp'},
  {value: '6', label: 'Hành chính'},
  {value: '7', label: 'Công viên'},
  {value: '8', label: 'Trung tâm thể thao'},
]
const statusPostOptions: ISelect[] = [
  {value: '1', label: 'Đang soạn'},
  {value: '2', label: 'Đang chờ duyệt'},
  {value: '3', label: 'Đã duyệt'},
  {value: '4', label: 'Đã xuất bản'},
]
const teamOptions: ISelect[] = [
  {value: '1', label: 'Team  1'},
  {value: '2', label: 'Team 2'},
]
const positionOptions: ISelect[] = [
  {value: 'sales-consultant', label: 'Sales Consultant'},
  {value: 'senior-sales', label: 'Senior Sales'},
  {value: 'sales-manager', label: 'Sales Manager'},
  {value: 'senior-sales-manager', label: 'Senior Sales Manager'},
  {value: 'senior-director', label: 'Senior Director'},
]
const subjectOptions: ISelect[] = [
  {label: 'Tin tức', value: 'news'},
  {label: 'Thị Trường', value: 'marketing'},
  {label: 'Phân tích', value: 'analysis'},
  {label: 'Đầu tư', value: 'invest'},
  {label: 'Kiến thức', value: 'knowledge'},
  {label: 'Công nghệ', value: 'technology'},
  {label: 'Truyền thông', value: 'media'},
]
const networkOptions: ISelect[] = [
  {label: 'Facebook', value: 'facebook'},
  {label: 'Instagram', value: 'instagram'},
  {label: 'Twitter', value: 'twitter'},
]
const educationOptions: ISelect[] = [
  {label: 'Đại học', value: 'dai-hoc'},
  {label: 'Cao Đẳng', value: 'cao-dang'},
  {label: 'Trung cấp', value: 'trung-cap'},
  {label: 'Thạc sỹ', value: 'thac-sy'},
]
const levelLanguageOptions: ISelect[] = [
  {label: 'Sơ cấp', value: 'so-cap'},
  {label: 'Trung cấp', value: 'trung-cap'},
  {label: 'Cao cấp', value: 'cao-cap'},
  {label: 'Thành thạo', value: 'thanh-thao'},
]
const languageOptions: ISelect[] = [
  {label: 'Tiếng Anh', value: 'tieng-anh'},
  {label: 'Tiếng Nhật', value: 'tieng-nhat'},
  {label: 'Tiếng Trung', value: 'tieng-trung'},
  {label: 'Tiếng Hàn', value: 'tieng-han'},
]
const certificateOptions: ISelect[] = [
  {label: 'Chứng chỉ hành nghề môi giới bất động ', value: '1'},
  {label: 'Chứng chỉ quản lý và điều hành sàn giao dịch bất động sản ', value: '2'},
  {label: 'Chứng nhận định giá bất động sản', value: '3'},
  {label: 'Khác', value: '4'},
]
const roleOptions: ISelect[] = [
  {label: 'Content Editor', value: 'content-editor'},
  {label: 'Content Leader', value: 'content-leader'},
]
const permissionOptions: ISelect[] = [
  {label: 'All', value: 'all'},
  {label: 'Access denied', value: 'access-denied'},
  {label: 'Owned only', value: 'owned-only'},
]
const departmentOptions: ISelect[] = [
  {label: 'CMS', value: 'cms'},
  {label: 'Department 1', value: 'department-1'},
  {label: 'Departement 2', value: 'department-2'},
]
const statusUserOptions: ISelect[] = [
  {label: 'Đang hoạt động', value: 'active'},
  {label: 'Ngưng kích hoạt', value: 'inactive'},
  {label: 'Tạm khóa', value: 'block'},
]
const memberOptions = [
  {value: 'hieunt', label: 'Nguyễn Trọng Hiếu', imgUrl: '/media/avatars/300-10.jpg', position: 'pos dev'},
  {value: 'duongtv', label: 'Trân Văn Dương', imgUrl: '/media/avatars/300-11.jpg', position: 'pos dev'},
  {value: 'duypq', label: 'Phạm Quốc Duy', imgUrl: '/media/avatars/300-12.jpg', position: 'pos dev'},
  {value: 'trannlb', label: 'Nguyễn Lâm Bảo Trân', imgUrl: '/media/avatars/300-13.jpg', position: 'pos dev'},
  {value: 'chidm', label: 'Đỗ Minh Chí', imgUrl: '/media/avatars/300-14.jpg', position: 'pos dev'},
  {value: 'chuanpv', label: 'Phạm Văn Chuẩn', imgUrl: '/media/avatars/300-15.jpg', position: 'pos dev'},
  {value: 'anhnt', label: 'Nguyễn Tuấn Anh', imgUrl: '/media/avatars/300-16.jpg', position: 'pos dev'},
  {value: 'phuocnh', label: 'Nguyễn Hữu Phước', imgUrl: '/media/avatars/300-17.jpg', position: 'pos dev'},
  {value: 'nguyennp', label: 'Nguyễn Phúc Nguyên', imgUrl: '/media/avatars/300-18.jpg', position: 'pos dev'},
  {value: 'ngocntm', label: 'Nguyễn Thị Minh Ngọc', imgUrl: '/media/avatars/300-19.jpg', position: 'pos dev'},
]

export {
  defaultMessages,
  defaultUserInfos,
  defaultAlerts,
  defaultLogs,
  messageFromClient,
  typeOptions,
  companyOptions,
  statusProjectOptions,
  typeHousingOptions,
  statusResidentOptions,
  typeFacilityOptions,
  statusPostOptions,
  teamOptions,
  positionOptions,
  subjectOptions,
  networkOptions,
  certificateOptions,
  levelLanguageOptions,
  languageOptions,
  educationOptions,
  roleOptions,
  departmentOptions,
  statusUserOptions,
  memberOptions,
  permissionOptions,
  directionOptions,
}
