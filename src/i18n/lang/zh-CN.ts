export default {
  api: {
    operationFailed: '操作失败',
    errorTip: '错误提示',
    errorMessage: '操作失败,系统异常!',
    timeoutMessage: '登录超时,请重新登录!',
    apiTimeoutMessage: '接口请求超时,请刷新页面重试!',
    apiRequestFailed: '请求出错，请稍候重试',
    networkException: '网络异常',
    networkExceptionMsg: '网络异常，请检查您的网络连接是否正常!',
    forcedOffline: '管理员强制下线',

    errMsg400: '参数错误，请联系管理员!',
    errMsg401: '当前未登陆，请退出重新登录!',
    errMsg403: '用户得到授权，但是访问是被禁止的。!',
    errMsg404: '路径不存在，请联系管理员!',
    errMsg405: '网络请求错误,请求方法未允许!',
    errMsg408: '网络请求超时!',
    errMsg420: '签名错误，请联系管理员!',
    errMsg421: '该操作无权限，请联系主账户进行权限赋予!',
    errMsg500: '系统异常，请联系管理员!',
    errMsg501: '网络未实现!',
    errMsg502: '网络错误!',
    errMsg503: '服务不可用，服务器暂时过载或维护!',
    errMsg504: '网络超时!',
    errMsg505: 'http版本不支持该请求!',
    errMsgDefault: '系统异常，请联系管理员!',
  },
  // 公用部分
  common: {
    btns: {
      reset: '重置',
      search: '筛选',
      batch: '批量操作',
      cancel: '取消',
      confirm: '确定',
      save: '保存',
      close: '关闭',
      submit: '提交',
      edit: '编辑',
      delete: '删除',
    },
    select: ['全选', '已选择{n}个'],
    pageTotal: '共 {n} 条',
    pageLimit: '最多支持查询1万条数据，查看其它数据请调整筛选条件',
    order: '排序方式',
    empty: '暂无数据',
    placeholder: {
      input: '请输入',
      select: '请选择',
    },
    tips: {
      saveSuccess: '保存成功',
      delSuccess: '删除成功',
    },
    pagination: {
      total: '共 {total} 条',
    },
    all: '全部',
    add: '新增',
    okText: '确定',
    uploadSuccess: '上传成功',
    move: '移动',
    remove: '移除',
    sortByUpdatedTime: '按更新时间',
    price: '价格',
    updatedTime: '更新时间：',
    createdTime: '创建时间：',
    sortByCreatedTime: '按创建时间',
    edit: '编辑',
    del: '删除',
    see: '查看',
    close: '关闭',
    operate: '操作',
    confirm: '确定',
    delete: '删除',
    cancel: '取消',
    index: '序号',
    remark: '备注',
    noEmptyDescribe: '不能为空',
    noEmpty: '{label}@:common.noEmptyDescribe',
    immediateAdd: '立即添加',
    immediateSet: '立即设置',
    delSuccess: '删除成功',
    addSucess: '新增成功',
    applySuccess: '申请成功',
    chooseRemind: '请选择{label}',
    selectRemind: '请选择完整的{label}',
    inputRemind: '请输入{label}',
    imageName: '图片名称',
    commonRemind: '温馨提示：',
    checkAll: '全选',
    enable: '启用',
    disable: '禁用',
    addSuccess: '新增成功',
    editSuccess: '编辑成功',
    deleteSuccess: '删除成功',
    enableSuccess: '启用成功',
    disableSuccess: '禁用成功',
    createSuccess: '创建成功',
    code: '编码',
    colorSize: '颜色尺码',
    proposedPrice: '参考价格',
    enabled: '启用状态',
    color: '颜色',
    size: '尺码',
    batchConfig: '批量设置',
    previous: '上一步',
    next: '下一步',
    complete: '完成',
    tag: '标签',
    imageTag: '图片标签',
    imageInfo: {
      imageExt: '图片格式：',
      imageSize: '图片大小：',
    },
    queryResultMaxNumber: '最多支持查询1万条数据，查看其它数据请调整筛选条件',
    confirmLabel: '是否确定{label}？',
    confirmLabelA: '是否确认{label}？',
    search: '搜索',
    clearAll: '清空',
    finishProduce: '完成生产',
    confirmRemove: '确定移除',
    confirmClear: '确定清空',
    confirmRemoveRemind: '是否确定移除?',
    status: '状态',
    table: {
      createdUserName: '创建人',
      created: '创建时间',
      modifiedUserName: '修改人',
      modified: '修改时间',
      operate: '操作',
    },
    reset: '重置',
    download: '下载',
  },
  // 图库管理
  galleryManage: {
    pageTitle: '创作管理 | 图库管理',
    sortOptions: ['创建时间', '更新时间'],
    batchBtns: ['批量设置分类', '批量删除'],
    category: {
      btns: ['设置', '新建分类'],
      text: ['图片分类', '未分类', '设置分类', '未命名分类'],
      // placeholder: ['(@:common.placeholder.input)分类名', '(@:common.placeholder.select)分类'],
      placeholder: ['请输入分类名', '请选择分类', '请选择图片分类'],
      tips: {
        save: '请先保存分类',
        delete: [
          '删除分类',
          '删除分类，对应分类的图片将归入未分类。是否确认删除？',
          '删除分类，将同时删除它们的子分类，对应分类的图片将归入未分类。是否确认删除？',
        ],
        set: ['将选中的{n}张图片移动至以下分类', '未选择分类时，图片将移入'],
        edit: '已有编辑项，请先编辑完成！',
        maxLevel: '最多创建3级',
        empty: '分类名不能为空',
        empty2: '图片分类不能为空',
      },
    },
    gallery: {
      text: ['图片名称', '删除图片', '编辑图片'],
      placeholder: '请输入图片名称',
      tips: {
        delete: [
          '删除后图片无法恢复，是否确认删除选中的{n}张图片?',
          '删除后图片无法恢复，是否确认删除?',
        ],
        select: '单次最多可操作{n}条数据',
        batchSet: '请选择需要批量设置的数据',
        batchDel: '请选择需要批量删除的数据',
      },
      empty: ['没有符合条件的图片', '立即添加'],
      fileExt: ['格', '式'],
      fileSize: ['大', '小'],
      createdTime: '创建时间',
      modifiedTime: '更新时间',
    },
    upload: {
      btns: ['上传图片'],
      text: ['请上传图片'],
      tips: {
        result: ['上传成功{n}张', '失败{n}张'],
        support: '支持20M之内的jpg、jpeg、png',
        limit: ['图片大小不能超过{n}M', '只支持jpg、jpeg、png格式图片'],
      },
    },
  },
  orderTemplate: {
    addTemplate: '新增模板',
    templateName: '模板名称',
    position: '模板排序',
    positionTip: '排序值将决定模板展示顺序，根据排序值降序展示',
    adaptPlatform: '适用平台',
    uploadFile: '上传文件',
    clickUpload: '点击上传',
    fileUpload: '文件上传',
    uploadHint: '请选择包含表头的文件，支持xls、xlsx文件格式，不超过10M',
    uploadTip: '将文件拖到此处，或',
    tableHeaderRowIndex: '表头行',
    tableHeaderName: '表头名称',
    mapRule: '映射关系',
    headerIdentifier: '识别表头',
    mapTableHeader: '映射表头',
    systemField: '系统字段',
  },
  platform: {
    addPlatform: '新增平台',
    salePlatform: '销售平台',
    position: '平台排序',
    positionTip: '排序值将决定平台渠道展示顺序，根据排序值降序展示',
  },
  order: {
    orderRemark: '订单备注',
    produceOrderRemark: '生产单备注',
    deliveryRemark: '发货备注',
    deliveryRemarkInfo: '备注内容将展示给到买家',
    editAddress: '修改地址',
    cancelOrder: '取消订单',
    payOrder: '支付订单',
    orderFrom: '订单来源：',
    logis: '物流信息',
    shippingName: '物流方式',
    shippingTrackingNumber: '物流单号',
    shippingUploadTime: '物流信息上传时间',
    pay: '支付',
    refund: '退款',
    paySuccess: '支付成功',
    orderCancel: '订单已取消',
    productInfo: '商品信息',
    buyerInfo: '买家信息',
    receiveInfo: '收货信息',
    refundConfirm: '请提前与工厂联系后操作，是否确认退款？',
    deliveryType: '发货类型',
    deliveryTip: '如果本次发货已完成生产订单所有商品发货，请选择完成全部发货，否则选择部分优先发货',
    deliveryBy: '发货人',
    allDelivery: '完成全部发货',
    partDelivery: '部分优先发货',
    removeOrder: '清空生产单',
  },
  saleOrder: {
    platform: '销售平台：',
    platform_other: '站内销售',
    orderNum: '订单号',
    orderNumWithM: '订单号：',
    refunded: '全部退',
    in_refund: '退款中',
    cancel: '已取消',
    wait_design: '待设计',
    wait_pay: '待支付',
    init: '待编辑',
    payed: '已支付',
    in_dispatch: '派单中',
    take_over: '已接单',
    wait_dispatch: '待派单',
    dispatched: '已派单',
    in_produce: '生产中',
    produced: '已生产',
    patch_delivery: '部分发货',
    delivered: '已发货',
    order_way: '下单方式：',
    created: '下单时间：',
    receiver_name: '收货人：',
    receiver_phone: '联系方式：',
    receiver_address: '收货地址：',
    order_remark: '订单备注：',
    self_order_way: '自助下单',
    copy_order_way: '复制订单',
    import_order_way: '导入订单',
    copy_order: '复制订单：',
    cellphone: '手机号',
    receiverEmail: '电子邮件',
    receiverPostcode: '邮编',
    receiverName: '收货人',
    receiverInfo: '所在地区',
    street: '详细地址',
    street1: '详细地址1',
    street2: '详细地址2',
    createInfo: '下单',
    payInfo: '支付',
    dispatchInfo: '派单',
    takeOverInfo: '接单',
    produceInfo: '生产',
    delivereInfo: '发货',
    cancelInfo: '取消',
    remark: '订单备注',
    orderRemarkRemind: '请输入备注内容',
    remarkLabelInfo: '备注内容',
    editAddress: '修改地址',
    rightCellphone: '正确的手机号',
    applyRefund: '申请退款',
    applyCancel: '取消订单',
    applyPay: '支付订单',
  },
  product: {
    designProduct: '定制商品',
    blankProduct: '空白商品',
    productName: '商品名称',
    productImg: '商品图',
    color: '颜色',
    size: '尺码',
    price: '单价',
    qty: '数量',
    status: '状态',
    operate: '操作',
    property: '属性',
  },
  //商品列表
  productManage: {
    userName: '联系人',
    phone: '联系电话',
    price: '价格',
    sort: '排序方式',
    allProduct: '全部商品',
    a: '全部分类',
    b: '全部',
    c: '元',
    d: '大于',
    e: '上新时间：由新到旧',
    f: '上新时间：由旧到新',
    g: '价格：由低到高',
    h: '价格：由高到低',
    i: '请输入搜索内容',
    j: '起',
  },
  createManage: {
    galleryManage: {
      imageCategory: '图片分类',
      setting: '设置',
      imageName: '图片名称',
      imagePlaceholder: '请输入图片名称',
      settingCategory: '分类设置',
      close: '关闭',
      saveCategoryRemind: '请先保存分类',
      setCategoryRemind: '请选择分类',
      uploadImg: '上传图片',
      replaceImg: '替换图片',
      uploadImgRemind: '请上传图片',
      uploadRemind: '支持20M之内的jpg、jpeg、png图片',
      uploadMaxsizeRemind: '图片大小不能超过{size}M',
      uploadStyleRemind: '只支持jpg、jpeg、png格式图片',
      cancel: '取消',
      confirm: '确定',
      submit: '提交',
      saveSuccess: '保存成功',
      uploadFailInfo: '上传成功{successLen}张，失败{failLen}张',
      uploadSuccessInfo: '上传成功{successLen}张',
      all: '全选',
      choosedNumber: '已选择{number}个',
      batchRemindInfo: '请选择需要批量设置的数据',
      batchOperation: '批量操作',
      batchCategory: '批量设置分类',
      batchDelete: '批量删除',
      batchDelelteRemind: '请选择需要批量删除的数据',
      batchGallery: '批量设置归属图库',
      sort: '排序方式',
      editCategoryRemind: '将选中的{ selectNum }张图片移动至以下分类：',
      delImgRemind: '删除后图片无法恢复，是否确认删除选中的{number}张图片？',
      delOneImgRemind: '删除后图片无法恢复，是否确认删除？',
      deImgMark: '备注：不影响已使用的该图片的数据',
      emptyMessage: '暂无数据',
      delRemind: '删除提示',
      canUpdateNumber: '单次最多可操作{number}条数据',
      settingGallery: '创建图库',
      editGallery: '编辑图库',
      galleryStatus1: '私有',
      galleryStatus2: '开放',
      galleryName: '图库名称',
      gallery: '图库',
      chooseGallery: '选择图库',
      galleryRemark: '图库描述',
      galleryStatus: '开放状态',
      galleryRemind: '请输入图库名称,最多8个字',
      galleryDescribeRemind: '请填写图库描述',
      dimension: '标签维度',
      galleryStatusInfo: `开放：您的所有用户均可查看图库中的图片
      私有：只有您才能查看图库中的图片`,
      imgNumber: '图片数量：',
      galleryCapacity: '图库容量：',
      switchGalleryRemind: '点击可切换更多图库',
      settingNewGallery: '创建新图库',
      settingNewDimension: '设置标签维度',
      delCategoryRemind: '将同时删除分类下的子分类，若分类存在图片将归入未分类。',
      delChildCategoryRemind: '若分类存在图片将归入未分类。',
      delCategoryConfirm: '确定删除分类？',
      noGalleryRemind: '暂无图库',
      noImageRemind: '没有符合条件的图片，',
      addCategory: '新建分类',
      undefindCategory: '未命名分类',
      categoryName: '分类名',
      editCategoryRemindInfo: '已有编辑项，请先编辑完成！',
      galleryRemarkRemind: '备注：没有图片的图库才可以删除',
      editImg: '编辑图片',
      cateMaxNumberRemind: '最多创建3级',
      galleryMaxNumberRemind: '最多支持{num}个图库',
      addDimension: '添加标签维度',
      setDimension: '设置标签维度',
      dimensionName: '标签维度名称',
      dimensionInputRemind: '请输入@:createManage.galleryManage.dimensionName',
      dimensionRemind: ` 标签维度最多可创建3个，标签维度所有图库共用；`,
      demensionRemind1: '删除标签维度将清空全部图片的标签，请谨慎操作。',
      tagRepeat: '标签不能重复',
      createdTags: '已创建标签',
      createTagRemind1: '① 显示标签维度下最近创建的100个标签 ',
      createTagRemind2: '② 删除标签不会影响已设置的图片',
      createTagRemind3: '③ 买家在设计器共享图库中，可通过标签筛选图片',
      delDimensionConfirm: '确定删除标签维度？',
      delDimensionInfo: '将同时清空全部图片的标签维度',
      dimensionTagMaxNumberRemind: '标签最多创建{number}个',
      demensionTagMaxLengthRemind: '标签不能超过{number}个字',
      noDimensionRemind: '请先设置标签维度，',
      noEmptyDimension: '暂无标签维度',
      noDimension: '暂无标签',
    },
    buyerGalleryManage: {
      imgName: '图片名称',
      imgNameTip: '请输入图片名称',
      customerName: '客户名称',
      customerNameTip: '请选择授权客户',
      image: '图片',
      imageExt: '图片格式',
      imagePixel: '图片像素',
      imageSize: '图片大小',
      createdUser: '上传客户',
      createdTime: '创建时间',
      modifiedTime: '更新时间',
      operate: '操作',
      deleteImg: '删除图片',
      deleteTips: '删除用户将无法使用这张图片，图片无法恢复，是否确认删除？',
    },
  },
};
