# Laboratory Workflow Mapping

## Step Flow

1. Token reception from front desk
2. Patient search by ID/token/mobile
3. Auto-fill patient demographics and order context
4. Test selection and urgency flagging
5. Barcode generation and label print/reprint
6. Sample collection with barcode scan confirmation
7. Processing queue routing by category and status
8. Technician result entry and draft submission
9. Senior technician review and correction loop
10. Final approval / verification and publish
11. Delivery desk notification and report dispatch

## Status Model

- `pending`
- `in_progress`
- `waiting_review`
- `reviewed`
- `approved`
- `delivered`

## Role Mapping

- Operator: token, patient search, reception, barcode, delivery lookup
- Collector: sample scan + collection confirmation
- Technician: processing + result entry
- Senior Technician: review + correction + forward
- Approver: final verify / reject / publish
- Admin/Super Admin: full visibility, analytics, staff performance

## Future Expansion

- Add LIS/HIS integration by replacing mock data with API services
- Add barcode scanner hardware event support
- Add print template engine for report PDF and label dimensions
