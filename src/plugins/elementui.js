import Vue from 'vue'
// 倒入elementui样式
import 'element-ui/lib/theme-chalk/index.css'

import {
  Pagination,
  Dialog,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Form,
  FormItem,
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification,
  Cascader,
  Tooltip,
  Steps,
  Step,
  upload,
  Menu,
  MenuItem
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Loading.directive)
Vue.use(Cascader)
Vue.use(Tooltip)
Vue.use(Steps)
Vue.use(Step)
Vue.use(upload)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.prototype.$ELEMENT = { size: 'small' }
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
