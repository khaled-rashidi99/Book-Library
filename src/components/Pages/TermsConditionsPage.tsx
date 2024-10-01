import { Container, Typography, Box } from "@mui/material";

export default function TermsConditionsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        iBook Library Terms and Conditions
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to iBook Library. These Terms and Conditions govern your use
          of the Library's services, facilities, and materials. By becoming a
          member or using any of our services, you agree to be bound by these
          Terms. Please read them carefully.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          2. Membership
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Eligibility:</strong> Membership is open to all individuals
          who meet the age and residency requirements as determined by the
          Library. Proof of identity and address may be required.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Registration:</strong> To become a member, you must complete
          the registration form and provide accurate information. Any changes to
          your personal information should be updated promptly.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Membership Card:</strong> Members will be issued a Library
          card, which is non-transferable. You are responsible for any items
          borrowed using your card.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          3. Borrowing Materials
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Loan Period:</strong> Books and other materials can be
          borrowed for a period of days/weeks. Some items may have different
          loan periods, as indicated on the item or in the catalog.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Renewals:</strong> Items may be renewed if not reserved by
          another member. Renewals can be done in person, online, or by phone.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Returns:</strong> Items must be returned by the due date. Late
          returns will incur fines as outlined in the Library's Fee Schedule.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lost or Damaged Items:</strong> Members are responsible for
          the care of borrowed materials. The cost of replacement or repair will
          be charged for any lost or damaged items.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          4. Fines and Fees
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Overdue Fines:</strong> A fine of [amount] per day/week will
          be charged for overdue items. The maximum fine for any item will not
          exceed amount.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Lost/Damaged Items:</strong> Fees for lost or damaged items
          will be assessed based on the item's value and the Library's current
          replacement costs.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Payment:</strong> Fines and fees must be paid promptly.
          Failure to do so may result in suspension of borrowing privileges.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          5. Library Conduct
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Behavior:</strong> Members and visitors are expected to behave
          in a respectful manner. Disruptive or inappropriate behavior will not
          be tolerated.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Use of Facilities:</strong> The Library's facilities,
          including computers and study rooms, must be used according to posted
          guidelines. Misuse may result in suspension of privileges.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Children:</strong> Children under the age of 15 must be
          accompanied by an adult at all times. The Library is not responsible
          for unattended children.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          6. Digital Resources and Internet Use
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Access:</strong> Members may access digital resources and use
          the internet provided by the Library. Access is provided under the
          condition that it will be used responsibly and legally.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Restrictions:</strong> The Library may restrict access to
          certain websites or services to comply with legal requirements and to
          protect users.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Monitoring:</strong> The Library reserves the right to monitor
          the use of its digital resources to ensure compliance with these
          Terms.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          7. Privacy
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Personal Information:</strong> The Library respects your
          privacy and will only use your personal information in accordance with
          our Privacy Policy.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Confidentiality:</strong> The Library keeps borrowing records
          confidential and will not disclose this information to third parties
          unless required by law.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          8. Events and Programs
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Participation:</strong> The Library offers various events and
          programs for members. Participation is subject to registration and
          availability.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Cancellations:</strong> The Library reserves the right to
          cancel or reschedule events. Registered participants will be notified
          as soon as possible in such cases.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          9. Liability
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>General:</strong> The Library is not responsible for any
          personal injury, loss, or damage to property that occurs on Library
          premises.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Content:</strong> The Library does not guarantee the accuracy
          or reliability of any content available through its services. Users
          are responsible for verifying information.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          10. Termination of Membership
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Voluntary Termination:</strong> Members may terminate their
          membership at any time by notifying the Library and returning all
          borrowed materials.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Involuntary Termination:</strong> The Library reserves the
          right to terminate a membership for violation of these Terms, misuse
          of resources, or conduct deemed inappropriate.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          11. Changes to Terms and Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          The Library reserves the right to modify these Terms at any time.
          Members will be notified of significant changes. Continued use of the
          Library’s services constitutes acceptance of the new terms.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          12. Governing Law
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms are governed by and construed in accordance with the laws
          of The United States. Any disputes arising under these Terms shall be
          subject to the exclusive jurisdiction of the courts in America.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          13. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For questions or concerns regarding these Terms, please contact us at:
        </Typography>
        <Typography variant="body1">iBook Library</Typography>
        <Typography variant="body1">
          123 Library Street, Booktown, BT 12345
        </Typography>
        <Typography variant="body1">Phone: +1 234 567 8901</Typography>
        <Typography variant="body1">Email: info@iBooklibrary.com</Typography>
      </Box>

      <Typography variant="h6" gutterBottom>
        Acknowledgment
      </Typography>
      <Typography variant="body1" paragraph>
        By using the Library's services, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and Conditions.
      </Typography>
    </Container>
  );
}
